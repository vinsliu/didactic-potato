import React from "react";
import useLocalStorageWithExpiry from "../hooks/useLocalStorageWithExpiry";

export default function SplitPanel({
  sections = [],
  storageKey = "splitpanel.active",
  storageExpiryDays = 10,
  className = "",
}) {
  const [active, setActive] = useLocalStorageWithExpiry(storageKey, null, {
    expiryDays: storageExpiryDays,
  });

  function toggle(id) {
    setActive((cur) => (cur === id ? null : id));
  }

  const effectiveActive = active ?? sections[0]?.id ?? null;

  return (
    <div className={"split-panel " + (className || "")}>
      <div className="split-controls">
        {sections.map((s) => (
          <h3 key={s.id}>
            <button
              type="button"
              className={
                "nav-link split-toggle" +
                (effectiveActive === s.id ? " active" : "")
              }
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
            className={
              "split-item" + (effectiveActive === s.id ? " is-active" : "")
            }
            aria-hidden={effectiveActive !== s.id}
          >
            {s.content}
          </section>
        ))}
      </div>
    </div>
  );
}
