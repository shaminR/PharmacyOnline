import * as React from 'react';
// import {Navigation, Layout, Header, Content, Drawer} from 'react-mdl';
import {Card, Navbar, Button, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Main from './components/main';

class App extends React.Component{

	render() {
        return(
            <div>
            {/* <Navbar bg="primary" variant="dark" fixed = "top">
                <Navbar.Brand href="#home">PharmacyOnline®</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/drugs">Drugs</Nav.Link>
                <Link to="/about">About us</Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Button variant="dark">Sign Up</Button>
            </Navbar>
			<Card> */
            <h1> fuck u fudu </h1>}
				<Main/>
			{/* </Card> */}
            </div>
        );
    }
}

export default App;
