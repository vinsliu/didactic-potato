import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", margin: 0, padding: 0 }}>
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
