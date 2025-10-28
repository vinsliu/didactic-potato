import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored === "dark" ? "dark" : "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }

  return (
    <aside className="site-header">
      <div>
        <div className="header-top">
          <h2>Dev Full Stack</h2>
          <small>Vincent Liu</small>
        </div>

        <Navbar />
      </div>

      <div className="header-bottom">
        <Button
          variant="outline-primary"
          onClick={toggleTheme}
          aria-label="Basculer le thème clair/sombre"
          className="theme-toggle"
        >
          {theme === "light" ? "SOMBRE" : "CLAIR"}
        </Button>
      </div>
    </aside>
  );
}
