import * as React from 'react';
import styled from 'styled-components';
import {BootstrapTable, TableHeaderColumn, DeleteButton, InsertButton} from 'react-bootstrap-table';
import {Modal, Button, Form} from 'react-bootstrap';
import './react-bootstrap-table-all.min.css';
import './table.scss';
import ActiveLogin from '../ActiveLogin';
import './dialogBox.css';

const ButtonDiv:any = styled.div`     
    display: flex;
    justify-content: center;
    align-content: center;
    // background-color: red;
    gap: 10px;
`
const Header:any = styled.h3`
    margin-bottom: 20px;
    border-bottom: 1px solid black;
`
class PharmacistPrescribesTable extends React.Component{

    state = {
        prescribes: [],
        records: [],
        clientUsername: '',
        selectedPrescribe: '',
        modalVisibility: false,
        drugIdToAdd: '',
    }

    async componentDidMount() {
        this.find();
        let r = await fetch('/api/getPrescribes',{          //JSON.stringify({username: 'rahman', password: '8002'})
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: ActiveLogin.state.selectedClient})
        });
        try{
            console.log("yuhhhhh in get drug \n")
            let prescribes = await r.json();
            console.log(prescribes);

            this.setState({prescribes});

        }catch (error){
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
                body: JSON.stringify({'username': this.state.clientUsername})
            });
            let result = await r.json();
            console.log(result);
            console.log("yuh past records");

        } catch (error) {
            console.log(error);
        }
    }

    onSelectRow = (row: any, isSelected: boolean, e: any) => {
        this.state.selectedPrescribe = row.prescripId;
        console.log(row.prescripId);
    }   
    createCustomDeleteButton = (onClick) => {
        return (
            <DeleteButton
                btnText='Delete this prescription'
                btnContextual='btn-warning'
                className='my-custom-class'
                btnGlyphicon='glyphicon-edit'
                onClick={ () => this.delete(onClick) }
            />
        );
    }
    createCustomInsertButton = (onClick) => {
        return (
          <InsertButton
            btnText='Add Prescription'
            btnContextual='btn-warning'
            className='my-custom-class'
            btnGlyphicon='glyphicon-search'
            onClick={ () => this.addPrescribeButton(onClick) }/>
        );
    }
    delete = (onClick: any) => {
        if(!(this.state.selectedPrescribe == '')){
            console.log("delete pressed: " + this.state.selectedPrescribe);
            this.deletePrescribe();

            for (var i = this.state.prescribes.length - 1; i >= 0; --i) {                   // to delete order from table
                if (this.state.prescribes[i].prescripId == this.state.selectedPrescribe) {
                    this.state.prescribes.splice(i,1);
                }
            }
            this.forceUpdate();
        }
    }
    addPrescribeButton = (onClick: any) => {
        console.log("pressed add");
        this.state.modalVisibility = true;
        this.forceUpdate();
    }

    handleAddChange = (e: any) => {
        this.state.drugIdToAdd = e.target.value;
        console.log( this.state.drugIdToAdd);
    }
    closeModal = () => {
        this.state.modalVisibility = false;
        this.forceUpdate();
    }
    submitAdd = async () => {
        const drugId = +this.state.drugIdToAdd;
        if(Number.isNaN(drugId)){
            alert("Please enter a number");
            return;
        }

        const exists = await this.drugExists();
        if(!exists){
            alert("that drug doesnt exist");
            return;
        }

        let maxId = await this.getMaxId();
        const newId = +maxId + 1;
        
        let alreadyPrescribed: boolean = false;

        this.state.prescribes.forEach(element => {
            if(element.drugid == this.state.drugIdToAdd){
                alreadyPrescribed = true;
            }
        });

        if(!alreadyPrescribed){
            this.addPrescribe(newId); 
        }

        this.setState({
            modalVisibility: false
        });
        this.componentDidMount();

        console.log("made it yuh");
    }

    async getMaxId(){
        try {
			let r = await fetch('/api/getmaxid');
			let oId = await r.json();
            
            const oldMax = +oId[0].id;
            console.log(oldMax);
            return new Promise((resolve, reject) => {
                resolve(oldMax);
            });

		} catch(error){
			console.log(error);
		}
    }

    async addPrescribe(id: Number){       // not complete
        try {
            let r = await fetch('/api/addPrescribe', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'id': id, 'user': ActiveLogin.state.selectedClient, 'drugid': this.state.drugIdToAdd})
            });
            let result = await r.json();

            if(result == 'sucess'){
                console.log("successful");
            }
        } catch (error) {
            console.log("erorr in insertDrug frontend");
            console.log(error);
        }
    }

    async drugExists(){
        try {
            let r = await fetch('/api/drugExist', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'id': this.state.drugIdToAdd})
            });
            let result = await r.json();
            
            let exists: boolean = false;

            if(result == 'empty'){
                console.log("empty");// changed stock of drug: " + drugid + " by " + amountToReduce);
                exists = false;
            }else{
                console.log("exists");
                exists = true;
            }

            return new Promise((resolve, reject) => {
                resolve(exists);
            });
        
        } catch (error) {
            console.log(error);
            console.log("error in reduce drug stock");
        }
    }

    async deletePrescribe(){
        console.log("in delete");
        try {
            let r = await fetch('/api/deletePrescribe', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'id': this.state.selectedPrescribe})
            });
            let result = await r.json();

            if(result == 'sucess'){
                console.log("success fully deleted drug: " + this.state.selectedPrescribe);
            }

        } catch (error) {
            console.log(error);
            console.log("   << error in delete prescribe >>");
        }
    }

    render(){
        const options = {
            deleteBtn: this.createCustomDeleteButton,
            exportCSVBtn: this.createCustomInsertButton,
            noDataText: 'No Prescriptions',
            // afterDeleteRow: this.onDeleteRow,
        }
        const selectRowProp = {
            mode: 'radio',
            onSelect: this.onSelectRow,
            bgColor: 'gold',
        }
        return(
            <>
                <Header>Prescriptions for {ActiveLogin.state.selectedClient}</Header>
                {/* 
                // @ts-ignore */}
                <BootstrapTable data={this.state.prescribes} striped hover condensed exportCSV deleteRow selectRow={selectRowProp} options={options} search tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' }}>

                    <TableHeaderColumn isKey dataField='drugid' dataSort hidden={false} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                        Drug id
                    </TableHeaderColumn>

                    <TableHeaderColumn dataField='drugName' dataSort hidden={false} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                        Drug
                    </TableHeaderColumn>

                </BootstrapTable>
                {/* 
                // @ts-ignore */}
                <BootstrapTable data={this.state.records} striped hover condensed exportCSV deleteRow selectRow={selectRowProp} options={options} search tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' }}>

                    <TableHeaderColumn isKey dataField='allergy' dataSort hidden={false} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                        Allergy
                    </TableHeaderColumn>

                    <TableHeaderColumn dataField='condition' dataSort hidden={false} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                        Conditon
                    </TableHeaderColumn>

                </BootstrapTable>

                <Modal show = {this.state.modalVisibility} onHide = {this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Adding a prescription for {ActiveLogin.state.selectedClient} </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Drug Id of prescription to add</Form.Label>
                                <Form.Control type="username" placeholder="DrugId" id = "drugIdToAdd" onChange = {this.handleAddChange}/>
                            </Form.Group>

                            <ButtonDiv>
                                <Button variant="primary" onClick = {this.submitAdd} >Add</Button>
                            </ButtonDiv>
                        </Form>

                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default PharmacistPrescribesTable;
