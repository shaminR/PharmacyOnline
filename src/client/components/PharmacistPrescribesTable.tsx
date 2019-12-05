import * as React from 'react';
import styled from 'styled-components';
import {BootstrapTable, TableHeaderColumn, DeleteButton} from 'react-bootstrap-table';
import {Modal, Button} from 'react-bootstrap';
import './react-bootstrap-table-all.min.css';
import './table.scss';
import './dialogBox.css';

class PharmacistPrescribesTable extends React.Component{

    constructor(props: any) {
        super(props);
        this.state.clientUsername = props;
    }

    state = {
        prescribes: [],
        clientUsername: ''
    }

    render(){
        return(
            <>
                <h1>in prescriptions for {this.state.clientUsername} </h1>
            </>
        )
    }

}

export default PharmacistPrescribesTable;