import * as React from 'react';
import {Form, Button, DropdownButton, Dropdown, Table, Jumbotron} from 'react-bootstrap';
import styled from 'styled-components';
import ActiveLogin from '../ActiveLogin';
import DrugTable from './DrugTable';

class ClientPage extends React.Component {
    
    render() {
		return (
            <p>
                In client page for: {ActiveLogin.state.username}
            </p>
        )
    }
}

export default ClientPage;