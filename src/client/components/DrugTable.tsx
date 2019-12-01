import * as React from 'react';
import styled from 'styled-components';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './react-bootstrap-table-all.min.css';
import './table.scss';

const TableDiv = styled.div`
    margin: auto;
    width: 100%;
    height: 70%;
    // background-color: rgb(230, 230, 230);
    display:flex;
    border-radius: 10px;
    align-content: center;
    justify-content: center;
    // padding-top: 40px;
`

class DrugTable extends React.Component{

    state = {
        username: '',
        password: '',
        type: '',
        drugs:[]
    }

    onDeleteRow = (rowKeys: any) => {
        this.deleteDrug(rowKeys);
    }

    handleAddRowWithASyncError  = (row: any, colInfo: any, errorCallback: any) => { 
        
        const price = +row.price;
        const id = +row.drugid;
        const month = +row.expiryMonth;
        const year = +row.expiryYear;
        // console.log(row);
        if(Number.isNaN(price) || Number.isNaN(id) || Number.isNaN(month) || Number.isNaN(year)){
            alert("Please enter valid number!");
        }else{
            const temp: any = {drugid: id, drugName: row.drugName, price: price, expiryYear: year, expiryMonth: month};
            this.state.drugs.push(temp);
            this.insertDrug(temp);
            this.forceUpdate();
            console.log("pushed");
        }
    }

    onInsertRow = (row: any) => {

        let newValues = [];

        const price = +row["price"];
        const id = +row["drugid"];
        const month = +row["expiryMonth"];
        const year = +row["expiryYear"];
        
        if(Number.isNaN(price) || Number.isNaN(id) || Number.isNaN(month) || Number.isNaN(year)){
            alert("Please enter valid number!");
            // this.onDeleteRow(id, false);
            return;
        }else{
            alert("congratz!");
        }

        newValues["drugid"] = row["drugid"];
        newValues["drugName"] = row["drugName"];
        newValues["expiryMonth"] = row["expiryMonth"];
        newValues["expiryYear"] = row["expiryYear"];
        newValues["price"] = row["price"];

        let newRowStr = '';
        // console.log([newValues]);
        for (const prop in row) {
            newRowStr += prop + ': ' + row[prop] + ' \n';
        }
        alert('You inserted:\n ' + newRowStr);
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
			let r = await fetch('/api/drugs');
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
        }
        const selectRowProp = {
            mode: 'radio'
        }

        return(

            <div style = {{paddingTop: '10px'}}>

                <TableDiv>
                    {/* 
                    // @ts-ignore */}
                    <BootstrapTable data={this.state.drugs} striped hover condensed insertRow deleteRow selectRow={selectRowProp} options={options} search tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' }}>

                        <TableHeaderColumn isKey dataField='drugid' dataSort hidden={true} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                            DrugID
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='drugName' tdStyle={ { whiteSpace: 'normal' } }>
                            Name
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

                    </BootstrapTable>
                </TableDiv>

            </div>
        )
    }
}

export default DrugTable;
