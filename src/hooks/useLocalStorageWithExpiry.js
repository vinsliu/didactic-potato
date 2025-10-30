// Hook: useLocalStorageWithExpiry
// Stores a value in localStorage together with an optional expiration time.
// Default expiration: 30 days (can be overridden per-hook or per-set).
// API: const [value, setValue, remove] = useLocalStorageWithExpiry(key, initialValue, { expiryMs })
// - setValue(next, { expiryMs }) accepts a value or updater function (prev => next)
//   and optional expiry override in milliseconds. Pass `null` to remove the key.
// - remove() clears the key from storage and sets local state to null.

import { useCallback, useEffect, useState } from "react";

function readItem(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.expiresAt && Date.now() > parsed.expiresAt) {
      // expired
      localStorage.removeItem(key);
      return null;
    }
    return parsed?.value ?? null;
  } catch {
    return null;
  }
}

export default function useLocalStorageWithExpiry(key, initialValue = null, options = {}) {
  const DEFAULT_EXPIRY_DAYS = 30;
  const DAY_MS = 24 * 60 * 60 * 1000;
  const { expiryDays = DEFAULT_EXPIRY_DAYS, expiryMs = undefined } = options || {};

  // Resolve the effective default expiry in milliseconds.
  // - If `expiryMs` (number) is provided, it takes precedence.
  // - If `expiryDays` is a number, convert days -> ms.
  // - If `expiryDays` is explicitly null, that means "no expiry" (null).
  let expiryMsDefault = null;
  if (typeof expiryMs === "number") expiryMsDefault = expiryMs;
  else if (typeof expiryDays === "number") expiryMsDefault = expiryDays * DAY_MS;
  else expiryMsDefault = null;

  const [state, setState] = useState(() => {
    const stored = readItem(key);
    return stored !== null ? stored : initialValue;
  });

  // Write helper
  const write = useCallback((val, expiry = null) => {
    try {
      if (val === null || typeof val === "undefined") {
        localStorage.removeItem(key);
      } else {
        const payload = {
          value: val,
          expiresAt: expiry ? Date.now() + expiry : null,
        };
        localStorage.setItem(key, JSON.stringify(payload));
      }
    } catch {
      // ignore localStorage errors (private mode, quotas, etc.)
    }
  }, [key]);

  // setValue supports (value | updaterFunction, { expiryDays, expiryMs })
  const setValue = useCallback((next, opts = {}) => {
    setState((cur) => {
      const computed = typeof next === "function" ? next(cur) : next;
      // Resolve per-call expiry: prefer explicit opts.expiryMs, then opts.expiryDays.
      let useExpiryMs;
      if (opts && Object.prototype.hasOwnProperty.call(opts, "expiryMs") && typeof opts.expiryMs === "number") {
        useExpiryMs = opts.expiryMs;
      } else if (opts && Object.prototype.hasOwnProperty.call(opts, "expiryDays")) {
        // If expiryDays explicitly provided as null -> disable expiry.
        if (opts.expiryDays === null) useExpiryMs = null;
        else if (typeof opts.expiryDays === "number") useExpiryMs = opts.expiryDays * DAY_MS;
        else useExpiryMs = expiryMsDefault;
      } else {
        useExpiryMs = expiryMsDefault;
      }

      write(computed, useExpiryMs);
      return computed;
    });
  }, [write, expiryMsDefault, DAY_MS]);

  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
    } catch {
      // ignore
    }
    setState(null);
  }, [key]);

  // Listen to storage events (cross-tab sync)
  useEffect(() => {
    function onStorage(e) {
      if (e.key !== key) return;
      const newVal = readItem(key);
      setState(newVal !== null ? newVal : null);
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [key]);

  return [state, setValue, remove];
}
