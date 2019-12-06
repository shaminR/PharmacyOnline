import * as React from 'react';
import styled from 'styled-components';
import DrugButton from '../DrugButton';
// import {Navigation, Layout, Header, Content, Drawer} from 'react-mdl';
import {Navbar, Button, Nav, FormControl, Form} from 'react-bootstrap';
const Title = styled.h1` 
margin-top: 80px;
text-align: center;
    font-size: 50px;
    margin-bottom: 80px;

`
class DisplaySpecific extends React.Component<IAppProps, IAppState> {

	constructor(props: IAppProps) {
		super(props);
		this.state = {
			drugs: []
		};
	}
    
	async componentDidMount() {
  
        let r = await fetch('/api/getTypeDrug',{          //JSON.stringify({username: 'rahman', password: '8002'})
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DrugButton.state)
        });
		try {
           // let r = await fetch('/api/getTypeDrug');
  
			let drugs = await r.json();
			this.setState({ drugs });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container my-5">
    <Title className="text-center">Showing all {DrugButton.state.type}s</Title>
				<ul className="list-group">
					{this.state.drugs.map(drug =>{
						return <li className="list-group-item" key = {drug.drugName}>
							{drug.drugName},
							price: $
							{drug.price}
						</li>
					})}
				</ul>
			</main>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	drugs: Array<{drugName: string, price: string}>;
}

export default DisplaySpecific;