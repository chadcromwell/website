import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../css/fonts.css";
import "../css/NavBar/NavBar.css";
import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const NavBar = () => {
  let scroll = window.scrollY;
  let goingUp = true;
  const [opacity, setOpacity] = useState(1);

  // Whenever the user scrolls, this is called
  const controlNavBar = () => {
    // If te current scroll is less than the old scroll, the user has scrolled up so show navbar
    if (!goingUp && window.scrollY < scroll) {
      goingUp = true;
      setOpacity(1);
    } else if (goingUp && window.scrollY > scroll) {
      goingUp = false;
      // else, the user has scrolled down so hide navbar
      setOpacity(0);
    }
    scroll = window.scrollY; // Get new scroll position
  };

  // Call controlNavBar on each render
  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
  });

  return (
    <TransitionGroup component={null}>
      <CSSTransition classNames="navbar" timeout={300}>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="navbarBG"
          variant="dark"
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 10,
            opacity: opacity,
            transition: "opacity 300ms ease, transform 300ms",
          }}
        >
          <Container className="justify-content-end">
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{ opacity: opacity, transition: "opacity 0.4s ease" }}
            />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
              style={{ opacity: opacity, transition: "opacity 0.4s ease" }}
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
      </CSSTransition>
    </TransitionGroup>
  );
};

export default NavBar;
