import * as React from 'react';
import styled from 'styled-components';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './react-bootstrap-table-all.min.css';
import './table.scss';
import './dialogBox.css';

const TableDiv = styled.div`
    margin: auto;
    width: 100%;
    height: 70%;
    // background-color: rgb(230, 230, 230);
    display:flex;
    border-radius: 10px;
    align-content: center;
    justify-content: center;
    // padding-top: 10px;
    // padding-left: 10px;
    // padding-right: 10px;
`

class ClientDrugTable extends React.Component{

    state = {
        username: '',
        password: '',
        type: '',
        drugs:[]
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
  
    render(){
    
        const selectRowProp = {
            mode: 'radio'
        }

        return(

            <div style = {{paddingTop: '10px'}}>

                <TableDiv>
                    {/* 
                    // @ts-ignore */}
                    <BootstrapTable data={this.state.drugs} striped hover condensed pagination selectRow={selectRowProp} search tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' }}>

                        <TableHeaderColumn isKey dataField='drugid' dataSort hidden={true} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                            DrugID
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='drugName' tdStyle={ { whiteSpace: 'normal' } }>
                            Name
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='price' tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' }} >
                            Price (CAD)
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='expiryYear'dataSort hidden={true} tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' } }>
                            Expiry Year
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='expiryMonth' dataSort hidden={true} tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' } }>
                            Expiry Month
                        </TableHeaderColumn>
                        
                        <TableHeaderColumn dataField='stock' dataSort hidden={true} tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' } }>
                            Stock
                        </TableHeaderColumn>

                    </BootstrapTable>
                </TableDiv>

            </div>
        )
    }
}

export default ClientDrugTable;
