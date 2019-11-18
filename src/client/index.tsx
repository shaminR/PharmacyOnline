import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './scss/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';

// render(<App />, document.getElementById("root"));

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);