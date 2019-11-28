import * as React from 'react';
import {Form, Button, DropdownButton, Dropdown} from 'react-bootstrap';
import styled from 'styled-components';

const ButtonDiv = styled.div`     
    display:flex;
    justify-content: center;
    align-content: center;
    padding-top: 10px;
`
const FormDiv = styled.div`     
    margin: auto;
    width: 300px;
    background-color: rgb(230, 230, 230);
    display:flex;
    border-radius: 25px;
    align-content: center;
    justify-content: center;
    padding-top: 40px;
`
const DropDownDiv = styled.div`     
    padding-bottom: 10px;
`

class Login extends React.Component{

    state = {
        username: '33',
        password: 'tuhhhh',
    }

    action = () => {
        // alert("button pressed");
        console.log(this.state);
    }

    handleChange = (e: any) => {
        // console.log(e);
        this.setState({
            [e.target.id]: [e.target.value]
        })
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div style = {{paddingTop: '10px'}}>
                <FormDiv>
                    <Form onSubmit = {this.handleSubmit}>
                    <p style = {{color: '#23272b', fontWeight: 'bold', fontSize: '20'}}>
                        Enter details
                    </p>
                    <DropDownDiv>
                        <DropdownButton id="dropdown-basic-button" title="User Type">
                            <Dropdown.Item href="#/action-1">Pharmacist</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Client</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Driver</Dropdown.Item>
                        </DropdownButton>
                    </DropDownDiv>
                    
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" id = "username" onChange = {this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" id = "password" onChange = {this.handleChange}/>
                    </Form.Group>

                    <ButtonDiv>
                        <Button variant="primary" onClick = {this.action} >Sign in</Button>
                    </ButtonDiv>

                    </Form>
                </FormDiv>
                
            </div>
        )
    }
}

export default Login;