import React from "react";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import styled from 'styled-components';
import "./signup"
import { withRouter } from "react-router-dom";

const FormDiv = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px;
`
const SignUpJumbo = styled(Jumbotron)`
	padding: 1rem 2rem;
	background-color: red;
`
function validInfo(props: any){
	// need to chack the database later to see if name is taken and such
	// how do i error check insurance and ahn :(
	const ahn = +props.AHN;
	const insurance = +props.ICName;
	const month = +props.month;
	const day = +props.day;
	const year = +props.year;
	
	if(Number.isNaN(ahn) || Number.isNaN(insurance) || Number.isNaN(month) || Number.isNaN(day) || Number.isNaN(year)){
		console.log("Please enter valid number! for AHN and insurance number, or date");
		return false;
	}

	if(props.fname == ''|| props.lname == ''||props.pasword==''||props.username ==''){
		console.log("invalid names")
		return false;
	}
	if(props.month < 1 || props.month > 12){
		console.log("invalid month")
		return false;
	}
	if(props.day < 1 || props.day > 31){
		console.log("invalid day")
		return false;
	}
	if(props.year < 1900 || props.year > 2021){
		console.log("invalid year")
		return false;
	}
	return true;
}

class SignUp extends React.Component {

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
			alert("account created, press ok to go to sign in!");
			// @ts-ignore
			this.props.history.push('./login');
		}else{
			console.log("Invalid information");
			alert("Please enter valid information");
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
			console.log("user added");
		} catch(error){
			console.log(error);
		}
	}
	
	handleChange = (e: any) => {
		this.setState({
				[e.target.id]: [e.target.value]
		})
} 
	
	render() {
		return (
			<FormDiv>
				<Container>
				 <SignUpJumbo> 
					 <h1>Enter Details</h1>
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
					</SignUpJumbo>
				</Container>
			</FormDiv>
		);
	}
}
// @ts-ignore
export default withRouter(SignUp); 
