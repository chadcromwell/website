import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../css/fonts.css";
import "../css/NavBar/NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container className="justify-content-end">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="justify-content-end roboto-bold">
            <Nav.Link href="#about">
              <span className="roboto-thin" style={{ color: "#80ffff" }}>
                01.
              </span>
              About
            </Nav.Link>
            <Nav.Link href="#experience">
              <span className="roboto-thin" style={{ color: "#80ffff" }}>
                02.
              </span>
              Experience
            </Nav.Link>
            <Nav.Link href="#portfolio">
              <span className="roboto-thin" style={{ color: "#80ffff" }}>
                03.
              </span>
              Portfolio
            </Nav.Link>
            <Nav.Link href="#contact">
              <span className="roboto-thin" style={{ color: "#80ffff" }}>
                04.
              </span>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
