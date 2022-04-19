import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);
    const handelSignOUt = () => {
        signOut(auth);
    }
    return (

        <Navbar collapseOnSelect expand="lg" bg="primary" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Cyber-Doctor</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} eventKey={2} to="/">HOME</Nav.Link>
                        <Nav.Link as={Link} eventKey={2} to="/checkout">CHECKOUT</Nav.Link>
                        <Nav.Link as={Link} eventKey={2} to="/blog">BLOG</Nav.Link>
                    </Nav>
                    <Nav>

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