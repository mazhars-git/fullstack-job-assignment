import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MainMenu = () => {
    return (
        <section>
            <Navbar bg="info" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><h1 style={{fontSize: '30px', fontWeight: 'bold'}}>BB</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
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