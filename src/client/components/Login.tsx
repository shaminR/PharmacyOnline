import * as React from 'react';
import {Form, Button, DropdownButton, Dropdown} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import ActiveLogin from '../ActiveLogin';
import { withRouter } from "react-router-dom";

const ButtonDiv:any = styled.div`     
    display:flex;
    justify-content: center;
    align-content: center;
    padding-top: 10px;
`
const FormDiv:any = styled.div`     
    margin: auto;
    width: 300px;
    background-color: rgb(230, 230, 230);
    display:flex;
    border-radius: .2rem;
    align-content: center;
    justify-content: center;
    padding-top: 40px;
`
const DropDownDiv = styled.div`     
    padding-bottom: 0px;
`
class Login extends React.Component{

    state = {
        username: '',
        password: '',
        type: ''
    }

    dropListener = (e: any) => {
        this.setState({
            type: [e.target.value]
        })
    }

    action = () => {
        if(this.state.username === '' || this.state.password === ''){
            alert("Please enter valid credentials");
            return;
        } 
        if(this.state.type === '' || this.state.type == "Select"){
            alert("please select a user type");
            return;
        }
        else{
            console.log(this.state.type);
            this.verify();
        }
    }
    handleChange = (e: any) => {
        this.setState({
            [e.target.id]: [e.target.value]
        })
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(this.state);
    }
    async verify() {
        try {

            let r = await fetch('/api/users',{          //JSON.stringify({username: 'rahman', password: '8002'})
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            });
            let result = await r.json();
            let length = result.length;
           
            if(length == 0){
                alert("no user found");
                return;
            }

            ActiveLogin.state.password = this.state.password;             // storing who's actively logged in
            ActiveLogin.state.username = this.state.username;             // storing who's actively logged in
            ActiveLogin.state.type = this.state.type;             // storing who's actively logged in
            
            console.log(result.length);
            let usernameResult = result[0].username;

            console.log(usernameResult);
            console.log(" yuhh ");

            if(ActiveLogin.state.type[0] == 'Client'){
                // @ts-ignore
                this.props.history.push('./userpage');
            } else if(ActiveLogin.state.type[0] == 'Pharmacist'){
                // @ts-ignore
                this.props.history.push('./pharmacist');
            } else if(ActiveLogin.state.type[0] == 'Driver'){
                // @ts-ignore
                this.props.history.push('./driver');
            }
            else if(ActiveLogin.state.type[0] == 'Doctor'){
                // @ts-ignore
                this.props.history.push('./doctor');
            }

        } catch (error) {
            console.log(error);
        }
    }
  
    
    render(){
        return(
            <div style = {{paddingTop: '10px', marginTop: '40px'}}>
                <FormDiv>
                    <Form onSubmit = {this.handleSubmit}>
                    <p style = {{color: '#23272b', fontWeight: 'bold', fontSize: '20'}}>
                        Enter details
                    </p>
                    <DropDownDiv >
                        <Form.Group >
                            <Form.Control as="select" onChange = {this.dropListener}>
                                <option>Select</option>
                                <option>Pharmacist</option>
                                <option>Client</option>
                                <option>Driver</option>
                                <option>Doctor</option>
                            </Form.Control>
                        </Form.Group>
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
// @ts-ignore
export default withRouter(Login);
