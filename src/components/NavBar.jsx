import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand  to="#home">ABAMA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
                        
                        <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/category/entrenamiento">ENTRENAMIENTO </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/category/casual">CASUAL</NavDropdown.Item>
                            
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="#action/3.5">CONTACTO</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
     ) ;
};


