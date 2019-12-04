import * as React from 'react';
import { Component } from 'react';
import ActiveLogin from '../ActiveLogin';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import orders from '../../server/database/orders';
import { format } from 'path';

class ClientOrderTable extends React.Component{
    state = {
        orders:[]
    }
    updateOrderState(){
        console.log(JSON.stringify(status) + "yeahooooooo");
        if(status == '0'){
            status = 'Delivered';
        }
        if(status == '1'){
            status = 'Pending';
        }
        else if(status == '2'){
            status = 'Shipped';
        }
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
        for(var i = 0; i < orders.length; i++){
            if(orders[i].status == '0'){
                orders[i].status = 'Delivered';
            }
            if(orders[i].status == '1'){
                orders[i].status = 'Pending';
            }
            else if(orders[i].status == '2'){
                orders[i].status = 'Shipped';
            }
        }
        //console.log(orders[0].status + "YUhhhh ");

        //this.updateOrderState();
        this.setState({ orders });
    }
    
    format(cell, row){
        if(status == '0'){
            return 'Delivered';
        }
        if(status == '1'){
            return 'Pending';
        }
        else if(status == '2'){
            return 'Shipped';
        }
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
            <TableHeaderColumn dataField='status'
            >
            Status
            </TableHeaderColumn>
            </BootstrapTable>  );
                }
}
 
export default ClientOrderTable;