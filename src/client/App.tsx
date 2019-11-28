import * as React from 'react';
// import {Navigation, Layout, Header, Content, Drawer} from 'react-mdl';
import {Card, Navbar, Button, Nav} from 'react-bootstrap';
import {Route, Link, Router, NavLink} from 'react-router-dom';
import Main from './components/main';
import CustomNavbar from './components/navbar';

class App extends React.Component{

	render() {
        return(
            <div>
                <p>
                    <CustomNavbar />
                </p>
                <p>spacer</p>
                <Main />
            </div>
        );
    }
}

export default App;
