import React, { useState } from "react";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import { getStoredTheme, toggleTheme as toggleThemeUtil } from "../assets/js/theme";

export default function Header() {
  // initialize state from storage synchronously to avoid overwriting on mount
  const [theme, setTheme] = useState(() => getStoredTheme());

  function toggleTheme() {
    // toggleThemeUtil saves the next theme and applies it on the document
    setTheme((t) => toggleThemeUtil(t));
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
