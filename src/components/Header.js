import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Header = ({ isAuthenticated, logout }) => {
  return (
    <header>
      <Navbar bg="light" expand="lg" variant="light">
        <Container fluid>
          <Navbar.Brand id="site-title" href="/">
            ERL Dashboard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav id="navbarSupportedContent">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/">Calendar</Nav.Link>
              {isAuthenticated ? (
                <>
                  <Nav.Link href="/">My Account</Nav.Link>
                  <Button type="button" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <Nav.Link href="/login" className="btn btn-primary text-light">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
