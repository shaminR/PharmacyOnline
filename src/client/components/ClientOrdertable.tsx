import * as React from 'react';
import { Component } from 'react';
<<<<<<< Updated upstream
import './react-bootstrap-table-all.min.css';
=======
import ActiveLogin from '../ActiveLogin';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
>>>>>>> Stashed changes
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class ClientOrderTable extends React.Component{
    state = {
        orders:[]
    }

    async componentDidMount() {
	// 	try {
	// 		let r = await fetch('/api/orders');
	// 		let orders = await r.json();
	// 		this.setState({ orders });
	// 	} catch (error) {
	// 		console.log(error);
    //     }
    // }   
            let r = await fetch('/api/getAllClientOrders',{          //JSON.stringify({username: 'rahman', password: '8002'})
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
            },
                body: JSON.stringify(ActiveLogin.state)
            });
                let orders = await r.json();
                this.setState({ orders });
            }
        
    render() { 
        return (  <BootstrapTable data={this.state.orders} 
            striped
            hover
            condensed
            // pagination
            // insertRow
            // deleteRow
            search
 >
            <TableHeaderColumn isKey dataField='drugName'
            >
            Drug Name
            </TableHeaderColumn>
            <TableHeaderColumn dataField='quantity'
            >
            Quantity
            </TableHeaderColumn>
            <TableHeaderColumn dataField='drugPrice'
            >
            Price
            </TableHeaderColumn>
            </BootstrapTable>  );
                }
}
 
export default ClientOrderTable;