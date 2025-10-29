import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Nav className="flex-column site-nav">
      <Nav.Link as={Link} to="/">
        Accueil
      </Nav.Link>
      <Nav.Link as={Link} to="/technologies">
        Technologies
      </Nav.Link>
      <Nav.Link as={Link} to="/projects">
        Projets
      </Nav.Link>
      <Nav.Link as={Link} to="/contact">
        Contact
      </Nav.Link>
    </Nav>
  );
}
