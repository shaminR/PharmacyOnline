import * as React from 'react';
import styled from 'styled-components';
import {BootstrapTable, TableHeaderColumn, DeleteButton} from 'react-bootstrap-table';
import {Modal, Button} from 'react-bootstrap';
import './react-bootstrap-table-all.min.css';
import './table.scss';
import ActiveLogin from '../ActiveLogin';
import './dialogBox.css';

class PharmacistPrescribesTable extends React.Component{

    state = {
        prescribes: [],
        clientUsername: ''
    }

    async componentDidMount() {
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
   
            this.setState({prescribes});

            console.log(JSON.stringify(this.state.prescribes[0].drugid) + " yaheo");
        }catch (error){
            console.log(error);
        }
    }

    render(){
        const options = {
            // deleteBtn: this.createCustomInsertButton,
            noDataText: 'No Clients registered',
        }
        const selectRowProp = {
            mode: 'radio',
            // onSelect: this.onSelectRow,
            bgColor: 'gold',
        }
        return(
            <>
                <h1>in prescriptions for {ActiveLogin.state.selectedClient} </h1>
                {/* 
                // @ts-ignore */}
                <BootstrapTable data={this.state.prescribes} striped hover condensed deleteRow selectRow={selectRowProp} options={options} search tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' }}>

                        <TableHeaderColumn isKey dataField='AHN' dataSort hidden={false} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                            AHN
                        </TableHeaderColumn>

                </BootstrapTable>
            </>
        )
    }

}

export default PharmacistPrescribesTable;