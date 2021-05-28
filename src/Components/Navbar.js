import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'; 
import './Navbar.css';

function NavBar() {
    return (
        <>
        <Navbar className="navbar" bg="light" expand="lg">
        <Navbar.Brand href="#home">Mentopia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/topics">Topics</Link></Nav.Link>
            <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default NavBar;
// {/* <ul> */}
// <li><Link to="/">Home</Link></li>
// <li><Link to="/about">About</Link></li>
// <li><Link to="/topics">Topics</Link></li>
// <li><Link to="/blog">Blog</Link></li>
// </ul>