
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand  href="#home">ABAMA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">INICIO</Nav.Link>
                        <Nav.Link href="#link">ACTIVIDADES</Nav.Link>
                        <NavDropdown title="STORE" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">REMERAS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">BUZOS </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">LYCRAS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">BERMUDAS</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.5">CONTACTO</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    );
};


