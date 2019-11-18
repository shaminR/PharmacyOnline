import * as React from 'react';

class App extends React.Component<IAppProps, IAppState> {

	constructor(props: IAppProps) {
		super(props);
		this.state = {
			drugs: []
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/drugs');
			let drugs = await r.json();
			this.setState({ drugs });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container my-5">
				<h1 className="text-primary text-center">Drugs in stock</h1>
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

export default App;
