import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import LogoImage from './logo.png';
import '../header/Header.css';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand>
          <img
            src={LogoImage}
            alt='AllerRay Logo'
            height="80"
            className="d-inline-block align-top me-2"
          />
          AllerRay
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {/*<Nav.Link as={Link} to="/skincancer">UV Awareness & Sun Safety</Nav.Link>*/}
            {/*<Nav.Link as={Link} to="/pollenandhayfever">Awareness of Hay Fever</Nav.Link>*/}
            <Nav.Link as={Link} to="/activity">Activity Recommendation</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;