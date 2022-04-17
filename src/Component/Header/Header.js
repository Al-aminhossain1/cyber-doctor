import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
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
                        <Nav.Link eventKey={2} as={Link} to="/login">
                            LOG IN
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div className='container'>
        //     <nav className="navbar bg-success navbar-expand-lg navbar-light">
        //         <div className="container-fluid">
        //             <Link className="navbar-brand" to="#">Navbar</Link>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarNav">
        //                 <ul className="navbar-nav">
        //                     <li className="nav-item">
        //                         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link" to="/service">Service</Link>
        //                     </li>


        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
    );
};

export default Header;