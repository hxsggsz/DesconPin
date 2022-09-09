import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
   return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">DesconPin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/minhas-pastas">Minhas Pastas</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   )
}