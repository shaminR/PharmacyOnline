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
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
`

class PharmacistOrderTable extends React.Component{

    state = {
        orders: []
    }

    onDeleteRow = (rowKeys: any) => {
        console.log("delete row pressed");
    }

    handleAddRowWithASyncError  = (row: any, colInfo: any, errorCallback: any) => { 
        console.log("new row added pressed");
    }

    async componentDidMount() {
		try {
			let r = await fetch('/api/getAllPharmaOrders');
			let orders = await r.json();
            this.setState({ orders });
            console.log([this.state.orders]);
		} catch (error) {
			console.log(error);
		}
    }

    render(){
        const options = {
            onAddRow: this.handleAddRowWithASyncError,
            afterDeleteRow: this.onDeleteRow,
        }
        const selectRowProp = {
            mode: 'radio'
        }
        return(
            <div style = {{paddingTop: '10px'}}>

                <TableDiv>
                    {/* 
                    // @ts-ignore */}
                    <BootstrapTable data={this.state.orders} striped hover condensed selectRow={selectRowProp} options={options} search tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' }}>

                        <TableHeaderColumn isKey dataField='orderid' dataSort hidden={false} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                            Order#
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='clientAHN' tdStyle={ { whiteSpace: 'normal' } }>
                            Client
                        </TableHeaderColumn>

                    </BootstrapTable >

                </TableDiv>

            </div>

        )
    }

}

export default PharmacistOrderTable;