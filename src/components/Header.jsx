import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // load persisted theme or default to light
    const stored = localStorage.getItem("theme");
    const initial = stored === "dark" ? "dark" : "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  useEffect(() => {
    // keep document and storage in sync
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }

  return (
    <aside
      style={{
        width: 220,
        minHeight: "100vh",
        borderRight: "1px solid var(--muted, #eee)",
        padding: "1rem",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ margin: 0 }}>Dev Full Stack</h2>
          <small style={{ color: "var(--muted, #666)" }}>Vincent Liu</small>
        </div>

        <Navbar />
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={toggleTheme}
          aria-label="Basculer le thème clair/sombre"
          style={{
            width: "100%",
            padding: "0.5rem 0.75rem",
            borderRadius: 6,
            border: "1px solid var(--muted, #ccc)",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          {theme === "light" ? "SOMBRE" : "CLAIR"}
        </button>
      </div>
    </aside>
  );
}
