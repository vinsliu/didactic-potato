import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Nav className="flex-column site-nav">
      <Nav.Link as={NavLink} to="/" end>
        Accueil
      </Nav.Link>
      <Nav.Link as={NavLink} to="/technologies">
        Technologies
      </Nav.Link>
      <Nav.Link as={NavLink} to="/projects">
        Projets
      </Nav.Link>
      <Nav.Link as={NavLink} to="/contact">
        Contact
      </Nav.Link>
    </Nav>
  );
}
