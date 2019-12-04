import * as React from 'react';
import styled from 'styled-components';
import ActiveLogin from '../ActiveLogin';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Button } from "react-bootstrap";
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
const NameTitle = styled.h1`
    font-size: 36px;
    font-weight: bold;
    font-family: Arial, Sans;
    color: #007bff;
    float: center;
    display:flex;
    justify-content: center;
    align-content: center;
    margin-top: 40px;
`
const CenterBtn = styled.div`
    text-align:center;
`
 class Driver extends React.Component{

    state = {
        username: '',
        password: '',
        type: '',
        drugs:[],
        selected:'',
    }

    changeSelected = (row: any, isSelected: boolean, e: any) => {
        console.log("selected"+ row.drugid);
        this.state.selected = row.drugid;
    }

    onDeleteRow = (rowKeys: any) => {
        this.deleteDrug(rowKeys);
    }

    deliverDrug = (rowKeys: any)=>{
        this.changeDrugState();
    }    

    handleAddRowWithASyncError  = (row: any, colInfo: any, errorCallback: any) => { 
        
        const price = +row.price;
        const id = +row.drugid;
        const month = +row.expiryMonth;
        const year = +row.expiryYear;
        const amount = +row.stock;
        
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
        
        const temp: any = {drugid: id, drugName: row.drugName, price: price, expiryYear: year, expiryMonth: month, stock: amount};
        this.state.drugs.push(temp);
        this.insertDrug(temp);
        this.forceUpdate();
        console.log("pushed");
    }

    async changeDrugState(){
        console.log("working "+ this.state.selected);
        try {
            let r = await fetch('/api/change', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            });
            let result = await r.json();

            if(result == 'success'){
                this.componentDidMount();
                this.forceUpdate();
                alert("Drug has been delivered");
                console.log("successfully delivered: ");
            }
        } catch (error) {
            console.log("error");
            console.log(error);
        }
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
    }

    async componentDidMount() {
		try {
            let r = await fetch('/api/driverDrugs');
            //let r = await fetch('/api/driverDrugs')
			let drugs = await r.json();
			this.setState({ drugs });
		} catch (error) {
			console.log(error);
		}
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
    
    render(){
        const options = {
            onAddRow: this.handleAddRowWithASyncError,
            afterDeleteRow: this.onDeleteRow,
            clickToSelect: true,
        }
        const selectRowProp = {
            mode: 'radio',
            onSelect: this.changeSelected,
        }

        return(

            <div style = {{paddingTop: '10px'}}>
                <NameTitle> Welcome {ActiveLogin.state.username}, </NameTitle>

                <TableDiv>
                    {/* 
                    // @ts-ignore */}
                    <BootstrapTable data={this.state.drugs} striped hover condensed selectRow={selectRowProp} options={options} search tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' }}>

                        <TableHeaderColumn isKey dataField='drugid' dataSort hidden={true} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                            DrugID
                        </TableHeaderColumn>
                        
                        <TableHeaderColumn dataField='drugname' hidden={false} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                            Drug
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='amount' hidden={false} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                            Amount to Deliver
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='clientUsername' tdStyle={ { whiteSpace: 'normal' } }>
                            Deliver to
                        </TableHeaderColumn>

                    </BootstrapTable>
                </TableDiv>

                <CenterBtn>
                    <Button variant="primary" onClick = {this.deliverDrug}>Deliver!</Button>
                </CenterBtn>
            </div>
        )
    }
 }

export default Driver;