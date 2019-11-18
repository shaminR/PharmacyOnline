import * as React from 'react';
import {Navbar, Button, Nav, FormControl, Form} from 'react-bootstrap';
// import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

class LandingPage extends React.Component{
    render() {
        return(
            <>
            <Navbar bg="primary" variant="dark" fixed = "top">
                <Navbar.Brand href="#home">PharmacyOnline®</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/api/drugs">Drugs</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Button variant="dark">Sign Up</Button>
            </Navbar>
            </>
        );
    }
}

export default LandingPage;