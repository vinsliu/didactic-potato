import React, { useState } from "react";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import DefaultIcon from "../assets/img/Default-Squared.png";
import {
  getStoredTheme,
  toggleTheme as toggleThemeUtil,
} from "../assets/js/theme";

export default function Header() {
  const [theme, setTheme] = useState(() => getStoredTheme());

  function toggleTheme() {
    setTheme((t) => toggleThemeUtil(t));
  }

  return (
    <aside className="site-header">
      <div>
        <div className="header-top">
          <h2>
            <img src={DefaultIcon} alt="Vins Liu Icon" width={50} />
          </h2>
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
