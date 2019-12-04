import React from 'react';
import Druglist from './DrugList';
import About from './about';
import LandingPage from './LandingPage';
import Login from './Login';
import SignUp from './signup'
import ClientPage from './ClientPage';
import Pharmacist from './Pharmacist';
import Driver from './Driver';
import { Router, Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path = "/" component = {LandingPage} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/drugs" component = {Druglist}/>
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/signup" component = {SignUp}/>
        <Route exact path = "/userpage" component = {ClientPage}/>
        <Route exact path = "/pharmacist" component = {Pharmacist}/>
        <Route exact path = "/driver" component = {Driver}/>
    </Switch>
)

export default Main;
