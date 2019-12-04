import * as React from 'react';
import styled from 'styled-components';
import {BootstrapTable, TableHeaderColumn, DeleteButton} from 'react-bootstrap-table';
import {Modal, Button} from 'react-bootstrap';
import './react-bootstrap-table-all.min.css';
import './table.scss';
import './dialogBox.css';
const util = require('util');

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
        selected: {
            orderid: '',
            amount: '',
            drugid: '',
            drugName: '',
        },
        modalVisibility: false,
        modalProps: {
            drugName: '',
            drugAmount: '',
        }
    }

    onSelectRow = (row: any, isSelected: boolean, e: any) => {
        this.state.selected.orderid = row.orderid;
        this.state.selected.amount = row.amount;
        this.state.selected.drugid = row.drugid;
        this.state.selected.drugName = row.drugname;
    }
    acceptOrder = async (onClick: any) => {
        console.log("selected is: " + this.state.selected.orderid);
        console.log("amount is: " +  this.state.selected.amount);
        console.log("drugid is: " +  this.state.selected.drugid);

        const stock = await this.getDrugStock(+this.state.selected.drugid);

        if(stock < this.state.selected.amount){
            console.log("too much requested, not enough stock!");

            this.state.modalProps.drugName = this.state.selected.drugName;
            this.state.modalProps.drugAmount = "" + (+this.state.selected.amount - +stock);      //need to buy at least this amount

            this.state.modalVisibility = true;
            this.forceUpdate();

        } else{
            console.log("there is enough!");
            
            this.reduceStockBy(+this.state.selected.drugid, +this.state.selected.amount);
            this.changeOrderStatus(+this.state.selected.orderid);

            for (var i = this.state.orders.length - 1; i >= 0; --i) {                   // to delete order from table
                if (this.state.orders[i].orderid == this.state.selected.orderid) {
                    this.state.orders.splice(i,1);
                }
            }
        }
        this.forceUpdate();
    }

    async reduceStockBy(drugid: Number, amountToReduce: Number){
        try {
            let r = await fetch('/api/reduceDrugStock', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'id': drugid, 'amount': amountToReduce})
            });
            let result = await r.json();

            if(result == 'success'){
                console.log("successfully changed stock of drug: " + drugid + " by " + amountToReduce);
            }else{
                console.log("error in reducing stock");
            }
        
        } catch (error) {
            console.log(error);
            console.log("error in reduce drug stock");
        }
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

    async getDrugStock(drugid: Number){
        try {
            let r = await fetch('/api/getDrugStock', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'id': drugid})
            });
            let result = await r.json();
            const stock =  result[0].stock;
            console.log("the stock is " + stock);

            return new Promise((resolve, reject) => {
                resolve(stock);
            });
        
        } catch (error) {
            console.log(error);
            console.log("error in getting drug stock");
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

    createCustomInsertButton = (onClick: any) => {
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

    closeModal = () => {
        this.state.modalVisibility = false;
        this.forceUpdate();
    }

    render(){
        const options = {
            deleteBtn: this.createCustomInsertButton,
            noDataText: 'Currently no orders to accept!',
        }
        const selectRowProp = {
            mode: 'radio',
            onSelect: this.onSelectRow,
            bgColor: 'gold'
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

                        <TableHeaderColumn dataField='clientUsername' tdStyle={ { whiteSpace: 'normal' } }>
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

                <Modal show = {this.state.modalVisibility} onHide = {this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Not Enough Stock</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>Need to buy at least {this.state.modalProps.drugAmount} units of {this.state.modalProps.drugName} to fullfill order</Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>

        )
    }

}

export default PharmacistOrderTable;