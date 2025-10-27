import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ borderBottom: "1px solid #eee", padding: "0.5rem 1rem" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem", margin: 0, padding: 0 }}>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/projects">Projets</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
