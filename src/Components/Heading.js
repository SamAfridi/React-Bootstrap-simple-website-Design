import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./Nav.css";

const Heading = () => {
  return (
    <>
      <Navbar scrolling light expand="md" fixed="top" className="navTop">
        <Container>
          <Navbar.Brand href="#home">
            <span className="Brand">Plan :</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link
                className="navItem bg-light text-dark "
                href="#features"
              >
                Features
              </Nav.Link>
              <Nav.Link className="navItem text-light" href="#pricing">
                About
              </Nav.Link>
              <Nav.Link className="navItem text-light" href="#pricing">
                Views
              </Nav.Link>
              <Nav.Link className="navItem text-light" href="#pricing">
                Our expertise
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="navItem text-light" href="#deets">
                Contact
              </Nav.Link>
              <Nav.Link
                className="navItem text-light"
                eventKey={2}
                href="#memes"
              >
                Work
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Heading;
