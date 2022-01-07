import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg" variant="light">
                <Container fluid>
                    <Navbar.Brand id="site-title" href="/">ERL Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse  className="justify-content-end" id="basic-navbar-nav">
                        <Nav id="navbarSupportedContent">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
