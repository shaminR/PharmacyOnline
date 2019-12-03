import * as React from 'react';
import { Component } from 'react';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class ClientOrderTable extends React.Component{
    state = { 
        data : [
            {DrugName: 'ASSprin', Quantity: '17', Price: '$109'},
            {DrugName: 'Mike Hawk', Quantity: '20', Price: '$185'},
            {DrugName: 'Gabe Itches', Quantity: '12', Price: '$89'}
          ]
     }
    render() { 
        return (  <BootstrapTable data={this.state.data} 
            striped
            hover
            condensed
            // pagination
            // insertRow
            // deleteRow
            search
 >
            <TableHeaderColumn isKey dataField='DrugName'
            >
            Drug Name
            </TableHeaderColumn>
            <TableHeaderColumn dataField='Quantity'
            >
            Quantity
            </TableHeaderColumn>
            <TableHeaderColumn dataField='Price'
            >
            Price
            </TableHeaderColumn>
            </BootstrapTable>  );
                }
}
 
export default ClientOrderTable;