import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handelSignOUt = () => {
        signOut(auth);
    }
    return (

        <Navbar collapseOnSelect expand="lg" bg="primary" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/service">SERVICE</Nav.Link>
                        <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link as={Link} eventKey={2} to="/about">
                            ABOUT
                        </Nav.Link>
                        {!user ? <Nav.Link eventKey={2} as={Link} to="/login">
                            LOGIN
                        </Nav.Link> :
                            <Nav.Link eventKey={2} onClick={handelSignOUt}>
                                LOGOUT
                            </Nav.Link>}


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;