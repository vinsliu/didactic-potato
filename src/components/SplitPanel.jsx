import React, { useState, useEffect } from "react";

export default function SplitPanel({ sections = [], storageKey = "splitpanel.active", className = "" }) {
  // local state persisted to localStorage (per-component key)
  const [active, setActive] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored && sections.some((s) => s.id === stored)) {
        setActive(stored);
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggle(id) {
    setActive((cur) => {
      const next = cur === id ? null : id;
      try {
        if (next) localStorage.setItem(storageKey, next);
        else localStorage.removeItem(storageKey);
      } catch {
        // ignore
      }
      return next;
    });
  }

  const effectiveActive = active ?? sections[0]?.id ?? null;

  return (
    // The component root is only responsible for the split controls and
    // the panels. The page should render the title outside if required.
    <div className={"split-panel " + (className || "")}>
      <div className="split-controls">
        {sections.map((s) => (
          <h3 key={s.id}>
            <button
              type="button"
              className={"nav-link split-toggle" + (effectiveActive === s.id ? " active" : "")}
              onClick={() => toggle(s.id)}
              aria-expanded={effectiveActive === s.id}
              aria-controls={s.id}
            >
              {s.label}
            </button>
          </h3>
        ))}
      </div>

      <div className="split-content">
        {sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className={"split-item" + (effectiveActive === s.id ? " is-active" : "")}
            aria-hidden={effectiveActive !== s.id}
          >
            {s.content}
          </section>
        ))}
      </div>
    </div>
  );
}
