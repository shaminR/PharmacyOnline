import * as React from 'react';
import styled from 'styled-components';
import {BootstrapTable, TableHeaderColumn, DeleteButton} from 'react-bootstrap-table';
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
        orders: [],
        selected: ''
    }

    onSelectRow = (row: any, isSelected: boolean, e: any) => {
        this.state.selected = row.orderid;
    }
    acceptOrder = (onClick: any) => {
        console.log("selected is:" + this.state.selected);
        this.changeOrderStatus(+this.state.selected);

        for (var i = this.state.orders.length - 1; i >= 0; --i) {
            if (this.state.orders[i].orderid == this.state.selected) {
                this.state.orders.splice(i,1);
            }
        }
        this.forceUpdate();
    }

    async componentDidMount() {
		try {
			let r = await fetch('/api/getAllPharmaOrders');
			let orders = await r.json();
            this.setState({ orders });
		} catch (error) {
			console.log(error);
		}
    }

    async changeOrderStatus(orderid: number) {
        try {
            let r = await fetch('/api/pharmacistChangeOrder', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'id': orderid, 'status': '2'})
            });
            let result = await r.json();

            if(result == 'sucess'){
                console.log("successfully changed status of order: " + orderid);
            }
        } catch (error) {
            console.log(error);
            console.log("error in change order status frontend");
        }
    }

    createCustomInsertButton = (onClick) => {
        return (
            <DeleteButton
                btnText='Accept Order'
                btnContextual='btn-warning'
                className='my-custom-class'
                btnGlyphicon='glyphicon-edit'
                onClick={ () => this.acceptOrder(onClick) }
            />
        );
    }

    render(){
        const options = {
            // onAddRow: this.handleAddRowWithASyncError,
            deleteBtn: this.createCustomInsertButton,
            noDataText: 'Currently no orders to accept!',
            // afterDeleteRow: this.onDeleteRow,
        }
        const selectRowProp = {
            mode: 'radio',
            clickToSelect: true,
            onSelect: this.onSelectRow,
        }
        return(
            <div style = {{paddingTop: '10px'}}>

                <TableDiv>
                    {/* 
                    // @ts-ignore */}
                    <BootstrapTable data={this.state.orders} striped hover condensed deleteRow selectRow={selectRowProp} options={options} search tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' }}>

                        <TableHeaderColumn isKey dataField='orderid' dataSort hidden={false} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                            Order#
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='clientAHN' tdStyle={ { whiteSpace: 'normal' } }>
                            Client
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='drugname' tdStyle={ { whiteSpace: 'normal' } }>
                            Drug
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='amount' thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } }>
                            Amount ordered
                        </TableHeaderColumn>

                    </BootstrapTable >

                </TableDiv>

            </div>

        )
    }

}

export default PharmacistOrderTable;