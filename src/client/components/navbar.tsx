import * as React from 'react';
import {Card, Navbar, Button, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const MyLink = styled(Link)`     
    text-decoration: none;
    color: rgba(255,255,255,.5);

    &:hover {
        color: rgba(255,255,255,.75);
        text-decoration: none;
    }
`

class CustomNavbar extends React.Component{

    render(){

        return(
            <>
             <Navbar bg="primary" variant="dark" fixed = "top">
                <Navbar.Brand href="/">PharmacyOnline®</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link>
                        <MyLink to = "./drugs"  >Drugs</MyLink>
                    </Nav.Link>
                    <Nav.Link>
                        <MyLink to="./about">About us</MyLink>
                    </Nav.Link>
                    <Nav.Link>
                        <MyLink to="./nope">Unused</MyLink>
                    </Nav.Link>
                </Nav>
                <Button variant="dark">Sign Up</Button>
            </Navbar>
        </>
        );
    }
}

export default CustomNavbar;