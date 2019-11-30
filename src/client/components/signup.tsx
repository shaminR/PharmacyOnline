import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import styled from 'styled-components';
import "./signup"
import Redirect from "react-router-dom"

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

function validInfo(props){

  // need to chack the database later to see if name is taken and such

  // how do i error check insurance and ahn

  if(props.fname == ''|| props.lname == ''||props.pasword==''||props.username ==''){
    console.log("invalid names")
    return false;
   }
   if(props.month<1||props.month>12){
    console.log("invalid month")
     return false;
   }
   if(props.day<1||props.day>31){
    console.log("invalid day")
     return false;
   }
   if(props.year<1900||props.year>2021){
     console.log("invalid year")
     return false;
   }

   console.log("valid login info")
   return true;
}

class Login extends React.Component {


  state = {
    fname: '',
    minit: '',
    lname: '',
    month: '',
    day: '',
    year: '',
    password: '',
    username:'',
    AHN: '',
    ICName: '',
  }
  

  
  
  action = () => {
    console.log(this.state);
    if(validInfo(this.state)){
      this.submit();
    }else{
      console.log("Invalid information")
    }
  }




  async submit () {
    try{
      let r = await fetch ('/api/signup',{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });
      //let result = await r;
      console.log("user added");
    } catch(error){
      console.log(error);
    }
  }
  
  handleChange = (e: any) => {
    console.log(e);
    this.setState({
        [e.target.id]: [e.target.value]
    })
} 
  
  render() {
    return (
      <FormDiv>
        <Container>
         <Jumbotron> 
            <Form.Row>
              <Form.Group as = {Col} md = "4" >
                <Form.Label>First name</Form.Label>
                <Form.Control type="name" placeholder="First Name" id ="fname" onChange = {this.handleChange} />
              </Form.Group>

              <Form.Group as = {Col} md = "4">
                <Form.Label>Middle name</Form.Label>
                <Form.Control type="name" placeholder="Middle Name" id ="minit" onChange = {this.handleChange} />
              </Form.Group>

              <Form.Group as = {Col} md = "4">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="name" placeholder="Last Name" id ="lname" onChange = {this.handleChange} />
              </Form.Group>

          </Form.Row>
          <Form.Row>
              <Form.Group as = {Col} md ="4">
                <Form.Label>Month</Form.Label>
                <Form.Control placeholder="month" id ="month" onChange = {this.handleChange} />
              </Form.Group>
              <Form.Group as = {Col} md ="4">
                <Form.Label>Day</Form.Label>
                <Form.Control placeholder="day" id ="day" onChange = {this.handleChange} />
              </Form.Group>


              <Form.Group as = {Col} md ="4">
                <Form.Label>Year</Form.Label>
                <Form.Control placeholder="Year" id ="year" onChange = {this.handleChange} />
              </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as ={Col} md = "6">
                <Form.Label>AHN</Form.Label>
                <Form.Control placeholder = "AHN" id= "AHN" onChange = {this.handleChange}/>
              </Form.Group>

              <Form.Group as ={Col} md = "6">
                <Form.Label>Insurance number</Form.Label>
                <Form.Control placeholder = "Insurance number" id= "ICName" onChange = {this.handleChange}/>
              </Form.Group>
          </Form.Row>


          <Form.Row>
              <Form.Group as = {Col} md ="4"  id ="password">
                <Form.Label>Username</Form.Label>
                <Form.Control  placeholder="Password" id ="username" onChange = {this.handleChange} />
              </Form.Group>
              <Form.Group as = {Col} md ="4"  id ="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" id ="password" onChange = {this.handleChange} />
              </Form.Group>
          </Form.Row>
            <div className="btnDiv">
              <Button variant="primary" onClick = {this.action}>
                Submit
              </Button>
            </div>
          </Jumbotron>
        </Container>
      </FormDiv>
    );
  }
}

export default Login;
