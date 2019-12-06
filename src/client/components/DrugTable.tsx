import * as React from 'react';
import styled from 'styled-components';
import {BootstrapTable, TableHeaderColumn, DeleteButton} from 'react-bootstrap-table';
import { Modal, Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';
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
const ButtonDiv:any = styled.div`     
    display:flex;
    justify-content: center;
    align-content: center;
    padding-top: 10px;
`
class DrugTable extends React.Component{

    state = {
        type: '',
        selectedDrug: {
            id: '',
            name: '',
            type: '',
        },
        boxVal: '',
        text: "please select a medication type",
        drugs: [],
        modalVisibility: false,
        dropdownModal: false,
        amountToAdd: '',
        dropdownType: '',
        rowToAdd: {
            name: '',
            price: '',
            drugid: '',
            expiryMonth: '',
            expiryYear: '',
            stock: '',
        }
    }

    onDeleteRow = (rowKeys: any) => {
        this.deleteDrug(rowKeys);
    }

    handleAddRowWithASyncError  = (row: any, colInfo: any, errorCallback: any) => { 
        
        this.state.rowToAdd.price = row.price;
        this.state.rowToAdd.drugid = row.drugid;
        this.state.rowToAdd.expiryMonth = row.expiryMonth;
        this.state.rowToAdd.expiryYear = row.expiryYear;
        this.state.rowToAdd.stock = row.stock;
        this.state.rowToAdd.name = row.drugName;

        // this.errorCheckAndAdd();
        this.setState({
            dropdownModal: true
        })
    }

    errorCheckAndAdd = () => {

        const price = +this.state.rowToAdd.price;
        const id = +this.state.rowToAdd.drugid;
        const month = + this.state.rowToAdd.expiryMonth;
        const year = +this.state.rowToAdd.expiryYear;
        const amount = +this.state.rowToAdd.stock;
        
        if(Number.isNaN(price) || Number.isNaN(id) || Number.isNaN(month) || Number.isNaN(year) || Number.isNaN(amount)){
            alert("Please enter valid number!");
            return;
        }
        if(amount < 1){
            alert("Please enter a valid amount!");
            return;
        }
        let isUnique: boolean = true;
        this.state.drugs.forEach(element => {
            if(id == element.drugid){
                alert("please enter a unique drug id !");
                isUnique = false;
                return;
            }
        });
        if(!isUnique) return;
        
        const typeToAdd = this.state.dropdownType;
        if(typeToAdd == ''){
            alert("please select a type");
        }

        const temp: any = {drugid: id, drugName: this.state.rowToAdd.name, price: price, type: typeToAdd, expiryYear: year, expiryMonth: month, stock: amount,description: this.state.boxVal};
        this.state.drugs.push(temp);
        this.insertDrug(temp);
        this.forceUpdate();
        console.log("pushed");
    }

    async insertDrug(details: any){
        try {
            let r = await fetch('/api/adddrug', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(details)
            });
            let result = await r.json();

            if(result == 'sucess'){
                console.log("successfully added drug: " + details.drugName);
            }
        } catch (error) {
            console.log("erorr in insertDrug frontend");
            console.log(error);
        }


        try {
            let r = await fetch('/api/drugType', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(details)
            });
            let result = await r.json();

            if(result == 'sucess'){
                console.log("successfully added drug: " + details.drugName);
            }
        } catch (error) {
            console.log("erorr in insertDrug frontend");
            console.log(error);
        }










    }

    async deleteDrug(drugid: number) {
        try {
            let r = await fetch('/api/deletedrug', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(drugid)
            });
            let result = await r.json();

            if(result == 'sucess'){
                console.log("success fully deleted drug: " + drugid);
            }

        } catch (error) {
            console.log(error);
            console.log("   << error in deleteDrug >>");
        }


        if(this.state.selectedDrug.type=='Chewable'){
            console.log("CJEWABLE");
        }
        else if (this.state.selectedDrug.type == 'Ointment'){
            try {
                let r = await fetch('/api/deleteChewable', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(drugid)
                });
                let result = await r.json();
    
                if(result == 'sucess'){
                    console.log("success fully deleted drug: " + drugid);
                }
    
            } catch (error) {
                console.log(error);
                console.log("   << error in deleteDrug >>");
            }
        }
        else if (this.state.selectedDrug.type == 'Spray'){
            try {
                let r = await fetch('/api/deleteSpray', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(drugid)
                });
                let result = await r.json();
    
                if(result == 'sucess'){
                    console.log("success fully deleted drug: " + drugid);
                }
    
            } catch (error) {
                console.log(error);
                console.log("   << error in deleteDrug >>");
            }
        }
        else if (this.state.selectedDrug.type == 'Syrup'){
            try {
                let r = await fetch('/api/deleteSyrup', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(drugid)
                });
                let result = await r.json();
    
                if(result == 'sucess'){
                    console.log("success fully deleted drug: " + drugid);
                }
    
            } catch (error) {
                console.log(error);
                console.log("   << error in deleteDrug >>");
            }
        }
        else if (this.state.selectedDrug.type == 'Pill'){
            try {
                let r = await fetch('/api/deletePill', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(drugid)
                });
                let result = await r.json();
    
                if(result == 'sucess'){
                    console.log("success fully deleted drug: " + drugid);
                }
    
            } catch (error) {
                console.log(error);
                console.log("   << error in deleteDrug >>");
            }
        }




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

    closeModal = () => {
        this.state.modalVisibility = false;
        this.forceUpdate();
    }
    closeDropdownModal = () => {
        // this.state.modalVisibility = false;
        alert("sry cant close");
        this.forceUpdate();
    }
    
    getAllRecords = () => {
        console.log(this.state.type);
        this.find();
    }
    async getAllRecord(){
        try {
            let r = await fetch('/api/healthrecords');
            let healthrecords = await r.json();
            console.log(healthrecords);
        } catch (error) {
            console.log(error);
        }
    }
    async find() {
        try {
            let r = await fetch('/api/healthrecords',{          //JSON.stringify({username: 'rahman', password: '8002'})
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            });
            let result = await r.json();
            console.log(result);

        } catch (error) {
            console.log(error);
        }
    }

    addStockAction = (onclick: any) => {
        if(!(this.state.selectedDrug.id == '')){
            this.setState({
                modalVisibility: true
            });
        }
    }

    getInfo = (onclick: any) => {
        if(!(this.state.selectedDrug.id == '')){
            this.getInfoQuery();
        }
    }


    onSelectRow = (row: any, isSelected: boolean, e: any) => {
        this.state.selectedDrug.id = row.drugid;
        this.state.selectedDrug.name = row.drugName;
        this.state.selectedDrug.type = row.type;
    }
    handleAddChange = (e: any) => {
        this.setState({
           amountToAdd: e.target.value 
        });
    }
    submitAdd = () => {
        const amount = +this.state.amountToAdd;

        if(Number.isNaN(amount)){
            alert("must enter a number to add");
            return;
        } else if(amount < 1){
            alert("must enter a number greater than 1");
            return;
        }

        console.log("amount to add is: " + amount);
        this.addStock();

        this.setState({
            modalVisibility: false
        });
    }

    submitDropdownAdd = () => {
        console.log("pressed ");

        if(this.state.dropdownType == ''){
            alert("Please choose a type");
        }

        console.log("type of drug being added : " + this.state.dropdownType);
        this.errorCheckAndAdd();

        this.setState({
            dropdownModal: false
        });
    }

    async addStock(){
        try {
            let r = await fetch('/api/addDrugStock', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'id': this.state.selectedDrug.id, 'amount': this.state.amountToAdd})
            });
            let result = await r.json();

            if(result == 'success'){
                console.log("successfully added stock of drug: " + this.state.selectedDrug.id + " by " + this.state.amountToAdd);
                this.componentDidMount();
            }else{
                console.log("error in reducing stock");
            }
        
        } catch (error) {
            console.log(error);
            console.log("error in reduce drug stock");
        }
    }




    async getInfoQuery(){
        try {
            let r = await fetch('/api/addDrugStock', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'id': this.state.selectedDrug.id, 'amount': this.state.amountToAdd})
            });
            let result = await r.json();

            if(result == 'success'){
                console.log("successfully added stock of drug: " + this.state.selectedDrug.id + " by " + this.state.amountToAdd);
                this.componentDidMount();
            }else{
                console.log("error in reducing stock");
            }
        
        } catch (error) {
            console.log(error);
            console.log("error in reduce drug stock");
        }
    }

    createCustomExportCSVButton = (onClick: any) => {
        return (
            <>
            <DeleteButton
                btnText='Add More Stock'
                btnContextual='btn-warning'
                className='my-custom-class'
                btnGlyphicon='glyphicon-edit'
                onClick={ () => this.addStockAction(onClick) }
            />
                <DeleteButton
                btnText='Get medicine info'
                btnContextual='btn-warning'
                className='my-custom-class'
                btnGlyphicon='glyphicon-edit'
                onClick={ () => this.getInfo(onClick) }
            />
            </>
        );
    }

    dropListener = (e: any) => {
        this.setState({
            dropdownType: e.target.value
        })
        this.text();
    }

    text(){
        if(this.state.dropdownType=='Chewable'){
            this.setState({
              text: "Add chewable flavor... Eg: Orange "
            });
        }
        else if (this.state.dropdownType=='Pill'){
            this.setState({
                text: "Add Pill size... Eg: large "
              });
        }
        else if (this.state.dropdownType=='Spray'){
            this.setState({
                text: "Add Spray intensity... Eg: High "
              });
        }
        else if (this.state.dropdownType=='Ointement'){
            this.setState({
                text: "Add Ointment... Eg: Concentration "
              });
        }
        else if (this.state.dropdownType=='Syrup'){
            this.setState({
                text: "Add Syrup flavor... Eg: Strawberry "
              });
        }

        else{
            this.setState({
                text: "Add chewable flavor... Eg: Orange "
              });
        }
    }

	handleChange = (e: any) => {

		if(e.target.id == 'username'){
			console.log("CHANGING USERNAME");
			console.log(e.target.value);
		}
		this.setState({
				[e.target.id]: [e.target.value]
		})
	} 



    
    render(){
        const options = {
            onAddRow: this.handleAddRowWithASyncError,
            afterDeleteRow: this.onDeleteRow,
            exportCSVBtn: this.createCustomExportCSVButton,
        }
        const selectRowProp = {
            mode: 'radio',
            clickToSelect: true,
            onSelect: this.onSelectRow,
            bgColor: 'gold'
        }

        return(

            <div style = {{paddingTop: '10px'}}>

                <TableDiv>
                    {/* 
                    // @ts-ignore */}
                    <BootstrapTable data={this.state.drugs} exportCSV striped hover condensed insertRow deleteRow selectRow={selectRowProp} options={options} search tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' }}>

                        <TableHeaderColumn isKey dataField='drugid' dataSort hidden={false} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                            DrugID
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='drugName' tdStyle={ { whiteSpace: 'normal' } }>
                            Name
                        </TableHeaderColumn>
                        
                        <TableHeaderColumn hiddenOnInsert dataField='type' tdStyle={ { whiteSpace: 'normal' } }>
                            Type
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='price' tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' }} >
                            Price (CAD)
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='expiryYear' tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' } }>
                            Expiry Year
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='expiryMonth' tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' } }>
                            Expiry Month
                        </TableHeaderColumn>
                        
                        <TableHeaderColumn dataField='stock' tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' } }>
                            Stock
                        </TableHeaderColumn>

                    </BootstrapTable>
                </TableDiv>

                <Modal show = {this.state.modalVisibility} onHide = {this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Adding stock of {this.state.selectedDrug.name} </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Amount to add</Form.Label>
                                <Form.Control type="username" placeholder="Amount" id = "amountAdded" onChange = {this.handleAddChange}/>
                            </Form.Group>

                            <ButtonDiv>
                                <Button variant="primary" onClick = {this.submitAdd} >Add</Button>
                            </ButtonDiv>
                        </Form>

                    </Modal.Body>
                </Modal>

                <Modal show = {this.state.dropdownModal} onHide = {this.closeDropdownModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Select type of drug</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form>
                            <Form.Group >
                                <Form.Control as="select" onChange = {this.dropListener}>
                                    <option>Chewable</option>
                                    <option>Pill</option>
                                    <option>Ointment</option>
                                    <option>Syrup</option>
                                    <option>Spray</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Control size="sm" type="text" placeholder= {this.state.text} id ="boxVal"  onChange = {this.handleChange}/>

                            <ButtonDiv>
                                <Button variant="primary" onClick = {this.submitDropdownAdd} ></Button>
                            </ButtonDiv>
                        </Form>

                    </Modal.Body>
                </Modal>

            </div>
        )
    }
}

export default DrugTable;
