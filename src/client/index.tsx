import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './scss/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table';
import { Container } from "reactstrap";
import {BrowserRouter} from 'react-router-dom';

// render(<App />, document.getElementById("root"));

render(
    <BrowserRouter>
        <Container>
            <App />
        </Container>
    </BrowserRouter>,
    document.getElementById("root")
);