import * as React from 'react';
import { Component } from 'react';
import ActiveLogin from '../ActiveLogin';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class ClientOrderTable extends React.Component{
    state = {
        orders:[]
    }

    async componentDidMount() {
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
            <TableHeaderColumn isKey dataField='drugname'
            >
            Drug Name
            </TableHeaderColumn>
            <TableHeaderColumn dataField='amount'
            >
            Quantity
            </TableHeaderColumn>
            <TableHeaderColumn dataField='drugprice'
            >
            Price
            </TableHeaderColumn>
            </BootstrapTable>  );
                }
}
 
export default ClientOrderTable;