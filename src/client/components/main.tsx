import React from 'react';
import Druglist from './DrugList';
import About from './about';
import LandingPage from './LandingPage';
import Login from './Login';
import { Router, Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path = "/" component = {LandingPage} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/drugs" component = {Druglist}/>
        <Route exact path = "/login" component = {Login}/>
        
    </Switch>
)

export default Main;
