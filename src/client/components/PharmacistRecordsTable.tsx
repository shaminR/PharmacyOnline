import * as React from 'react';
import styled from 'styled-components';
import {BootstrapTable, TableHeaderColumn, DeleteButton, InsertButton} from 'react-bootstrap-table';
import {Modal, Button, Form} from 'react-bootstrap';
import './react-bootstrap-table-all.min.css';
import './table.scss';
import ActiveLogin from '../ActiveLogin';
import './dialogBox.css';

const Header:any = styled.h3`
    margin-bottom: 20px;
    border-bottom: 1px solid black;
`
class PharmacistRecordsTable extends React.Component{

    state = {
        records: [],
    }

    async componentDidMount() {
        this.find();
    }

    async find() {
        try {
            let r = await fetch('/api/healthrecords',{          //JSON.stringify({username: 'rahman', password: '8002'})
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'username': ActiveLogin.state.selectedClient})
            });
            let result = await r.json();
            console.log(result);
            this.setState({
                records: result
            })
            console.log("yuh past records");

        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return(
            <>
                <Header>{ActiveLogin.state.selectedClient}'s Health Record</Header>
               {/* 
                // @ts-ignore */}
                <BootstrapTable data={this.state.records} striped hover condensed tdStyle={ { whiteSpace: 'normal' } } thStyle={ { whiteSpace: 'normal' }}>

                    <TableHeaderColumn isKey dataField='allergy' dataSort hidden={false} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                        Allergy
                    </TableHeaderColumn>

                    <TableHeaderColumn dataField='condition' dataSort hidden={false} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                        Conditon
                    </TableHeaderColumn>

                    <TableHeaderColumn dataField='age' dataSort hidden={false} thStyle={ { whiteSpace: 'normal' } } tdStyle={ { whiteSpace: 'normal' } } >
                        Age
                    </TableHeaderColumn>

                </BootstrapTable>
            </>
        )
    }

}

export default PharmacistRecordsTable;