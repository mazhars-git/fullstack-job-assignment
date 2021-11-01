import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MainMenu = () => {
    return (
        <section>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><h1>BB</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Dashboard</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                        <Nav.Link href="#">Login</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
};

export default MainMenu;