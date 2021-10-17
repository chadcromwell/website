import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../css/fonts.css";
import "../css/NavBar/NavBar.css";
import { useEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const NavBar = () => {
  let scroll = window.scrollY;
  let goingUp = true;
  const [show, setShow] = useState(true);

  // Whenever the user scrolls, this is called
  const controlNavBar = () => {
    console.log("controlNavBar called");
    // If te current scroll is less than the old scroll, the user has scrolled up so show navbar
    if (!goingUp && window.scrollY < scroll) {
      goingUp = true;
      console.log("UP");
      setShow(true);
    } else if (goingUp && window.scrollY > scroll) {
      goingUp = false;
      console.log("DOWN");
      // else, the user has scrolled down so hide navbar
      setShow(false);
    }
    scroll = window.scrollY; // Get new scroll position
  };

  // Call controlNavBar on each render
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("scroll", controlNavBar);
  }, []);

  const nodeRef = useRef(null);
  return (
    <TransitionGroup component={null}>
      {show && (
        <CSSTransition classNames="navbar" timeout={300}>
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            sticky="top"
          >
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
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default NavBar;
