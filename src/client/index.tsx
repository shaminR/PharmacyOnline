import React from 'react';
import { render } from 'react-dom';
import App from './App';
import LandingPage from './LandingPage';
import './scss/app';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-mdl/extra/material.css';
// import 'react-mdl/extra/material.js';

render(<LandingPage />, document.getElementById("root"));