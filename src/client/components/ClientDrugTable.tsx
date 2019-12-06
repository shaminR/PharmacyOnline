import * as React from 'react';
import styled from 'styled-components';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ActiveLogin from '../ActiveLogin';
import './react-bootstrap-table-all.min.css';
import './table.scss';
import './dialogBox.css';
import { CLIENT_RENEG_LIMIT } from 'tls';
import { Button, Modal, Form } from 'react-bootstrap';

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
        // username: '',
        // password: '',
        // type: '',
        amountToAdd: '',
        modalVisibility: false,
        prescribedId:[],
        drugs:[],
        clientDrugIds: [],
        selected: {
         orderid: '',
         amount: '',
         drugid: '',
         drugname: '',
         drugPrice: '',
         clientName: '',
         status: 1
         }
        
         
    }
    
    action = () => {
        this.state.modalVisibility = true;
        this.forceUpdate();
        //this.sendOrder();
    }

    async getNewOrderID(){
        try {
			let r = await fetch('/api/getOrderId');
			let oId = await r.json();
			//this.setState({ drugs });
            this.state.selected.orderid = oId[0].orderid + 1;
			//console.log("id is " + oId[0].orderid);
		} catch(error){
			console.log(error);
		}
    }
    
    async sendOrder(){
        try{
          
			let r = await fetch ('/api/addOrder',{
                method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.state.selected)
			});
			console.log("order added");
		} catch(error){
			console.log(error);
		}
    }

     
    closeModal = () => {
        this.state.modalVisibility = false;
        this.forceUpdate();
    }

    handleAddChange = (e: any) => {
        
        this.state.amountToAdd = +e.target.value + "" 
        // if(Number.isNaN(num)){
        //    alert("must enter a number to add");
        //      return;
        //    } else if(num < 1){
        //      alert("must enter a number greater than 1");
        //       return;   
        //    }
            
           this.forceUpdate();
           
    }

    submitAdd = () => {
       const num = +this.state.amountToAdd;

        if(Number.isNaN(num)){
            alert("must enter a number to add");
            return;
        } else if(num < 1){
            alert("must enter a number greater than 1");
            return;
        }
        this.state.selected.amount = this.state.amountToAdd;

        console.log(this.state.selected);
        this.sendOrder();
        this.setState({
            modalVisibility: false
        }); 
    }
   
    onSelectRow = (row: any, isSelected: boolean, e: any) => {
        
        console.log("yehahhhh \n");
       // ClientDrugTable.state.amount = 1;
        this.state.selected.drugid = row.drugid;
        this.state.selected.drugname = row.drugName;
        this.state.selected.drugPrice = row.price;
        this.state.selected.clientName = ActiveLogin.state.username;
        this.getNewOrderID();
        console.log(this.state);
       // ClientDrugTable.state.status = 1;
    }

    async componentDidMount() {
        this.getDrugs();
        console.log(this.state.prescribedId + "yuh hehe hiZZZZZZZZZZ");
		try {
			let r = await fetch('/api/drugs');
            let drugs = await r.json();
            for(var i = 0; i <drugs.length; i++){
              for(var a = 0; a < this.state.prescribedId.length; a++){
                  if(drugs[i].drugid == this.state.prescribedId[a].drugid){
                      console.log(drugs[i].drugid);
                      this.setState({ 
                        drugs: this.state.drugs.concat([drugs[i]])
                      })
                  }
              }
            }
            console.log(this.state.drugs);
            //this.setState({ drugs });
            
		} catch (error) {
			console.log(error);
		}
    }

    async getDrugs() {
        
        let r = await fetch('/api/getClientdrugIds',{          //JSON.stringify({username: 'rahman', password: '8002'})
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ActiveLogin.state)
        });
        try{
            console.log("yuhhhhh in get drug \n")
        let prescribedId = await r.json();
       
        this.setState({prescribedId});
        console.log(JSON.stringify(this.state.prescribedId[0].drugid) + " yaheo");
        }catch (error){
            console.log(error);
        }
    }
    
  
    render(){
        
        const selectRowProp = {
            mode: 'radio',
            onSelect: this.onSelectRow
        }
        const options = {
            noDataText: 'Loading'
        }
        return(

            <div style = {{paddingTop: '10px'}}>
                <Button variant="primary" onClick = {this.action} >Order</Button>
                <TableDiv>
                    {/* 
                    // @ts-ignore */}    
                    <BootstrapTable data={this.state.drugs} striped hover condensed pagination selectRow={selectRowProp} options = {options} search tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' }}>

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
                
                <Modal show = {this.state.modalVisibility} onHide = {this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Adding stock of {this.state.selected.drugname} </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Amount to add</Form.Label>
                                <Form.Control type="username" placeholder="Amount" id = "amountAdded" onChange = {this.handleAddChange}/>
                            </Form.Group>
                                <Button variant="primary" onClick = {this.submitAdd} >Add</Button>
                           
                        </Form>

                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default ClientDrugTable;
