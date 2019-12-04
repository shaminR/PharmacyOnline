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
            mode: 'radio',
            clickToSelect: true,
            bgColor: 'gold'
        }

        return(

            <div style = {{paddingTop: '10px'}}>

                <TableDiv>
                    {/* 
                    // @ts-ignore */}
                    <BootstrapTable data={this.state.drugs} striped hover condensed insertRow deleteRow selectRow={selectRowProp} options={options} search tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' }}>

                        <TableHeaderColumn isKey dataField='drugid' dataSort hidden={false} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
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
                        
                        <TableHeaderColumn dataField='stock' tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' } }>
                            Stock
                        </TableHeaderColumn>

                    </BootstrapTable>
                </TableDiv>

            </div>
        )
    }
}

export default DrugTable;
