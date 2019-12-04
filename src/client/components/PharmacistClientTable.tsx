import * as React from 'react';
import styled from 'styled-components';
import {BootstrapTable, TableHeaderColumn, DeleteButton} from 'react-bootstrap-table';
import {Button, Modal} from 'react-bootstrap';
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
class PharmacistClientTable extends React.Component{

    state = {
        clients: [],
        selectedClient: {
            fname: '',
            lname: '',
            ICName: '',
            clientuser: ''
        },
        modalVisibility: false
    }

    async componentDidMount() {
		try {
			let r = await fetch('/api/getAllClients');
            let clients = await r.json();
            this.setState({ clients });
		} catch (error) {
			console.log(error);
		}
    }

    viewDetails = (onClick: any) => {
        console.log("pressed");
        if(!(this.state.selectedClient.clientuser == '')){
            this.state.modalVisibility = true;
            this.forceUpdate();
            console.log("pressed after");
        }
    }

    createCustomInsertButton = (onClick) => {
        return (
            <DeleteButton
                btnText='View Details'
                btnContextual='btn-warning'
                className='my-custom-class'
                btnGlyphicon='glyphicon-edit'
                onClick={ () => this.viewDetails(onClick) }
            />
        );
    }

    onSelectRow = (row: any, isSelected: boolean, e: any) => {
        this.state.selectedClient = row;
    }

    closeModal = () => {
        this.state.modalVisibility = false;
        this.forceUpdate();
    }

    render(){
        const options = {
            deleteBtn: this.createCustomInsertButton,
            noDataText: 'No Clients registered',
        }
        const selectRowProp = {
            mode: 'radio',
            onSelect: this.onSelectRow,
            bgColor: 'gold',
        }
        return(
            <div style = {{paddingTop: '10px'}}>

                <TableDiv>
                    {/* 
                    // @ts-ignore */}
                    <BootstrapTable data={this.state.clients} striped hover condensed deleteRow selectRow={selectRowProp} options={options} search tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' }}>

                        <TableHeaderColumn isKey dataField='AHN' dataSort hidden={false} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                            AHN
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='fname' thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } }>
                            First Name
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='minit' thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } }>
                            Middle Initial
                        </TableHeaderColumn>

                        <TableHeaderColumn dataField='lname' thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } }>
                            Last Name
                        </TableHeaderColumn>
                        
                        <TableHeaderColumn dataField='birthdate' thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } }>
                            Birth Date
                        </TableHeaderColumn>

                    </BootstrapTable >

                </TableDiv>

                <Modal show = {this.state.modalVisibility} onHide = {this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Client {this.state.selectedClient.fname}'s Details</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>Insurance Policy Number:  {this.state.selectedClient.ICName} </Modal.Body>
                    <Modal.Body>System username:  {this.state.selectedClient.clientuser} </Modal.Body>

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

export default PharmacistClientTable