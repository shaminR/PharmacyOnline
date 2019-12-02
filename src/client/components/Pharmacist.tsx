import * as React from 'react';
import {Form, Button, DropdownButton, Dropdown, Table, Jumbotron} from 'react-bootstrap';
import styled from 'styled-components';
import ActiveLogin from '../ActiveLogin';
import DrugTable from './DrugTable';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import 'react-bootstrap-table/css/react-bootstrap-table.css';
import './react-bootstrap-table-all.min.css';
import './table.scss';

const FirstCol = styled.div`
    // width: 60%;
    padding: 0 20px 0 0;
    float: left;
    background-color: rgb(230, 230, 230);
    padding-top: 10px;
    margin-top: 20px;
    border-radius: 10px;
    overflow-y:auto;
    overflow-x:hidden;
`
const SecondCol = styled.div`
    // width: 40%;
    padding-top: 10px;
    margin-top: 20px;
    float: right;
    border: 5px solid #cacaca;
    border-radius: 10px;
    overflow-y:auto;
    overflow-x:hidden;
`
const Title = styled.h1`
    font-size: 28px;
    color: #007bff;
    float: center;
    display:flex;
    justify-content: center;
    align-content: center;
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
`
const GridContainer = styled.div`
    column-gap: 30px;
    width: 117%;
    height: 90%;
    display: grid;
    grid-template-columns: 2fr 1fr;
`
class Pharmacist extends React.Component{

    render(){
        return(
            <>
            <GridContainer>
                <FirstCol>
                    <NameTitle> Welcome, {ActiveLogin.state.username} </NameTitle>
                </FirstCol>

                <SecondCol>
                    <Title> Drugs In Stock </Title>
                    <DrugTable/>
                </SecondCol>
            </GridContainer>
            </>
        )
    }

}

export default Pharmacist;