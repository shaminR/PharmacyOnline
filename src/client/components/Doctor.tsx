import * as React from 'react';
import {Form, Button, DropdownButton, Dropdown, Table, Jumbotron, ButtonToolbar} from 'react-bootstrap';
import styled from 'styled-components';
import ActiveLogin from '../ActiveLogin';
import DrugTable from './DrugTable';
import PharmacistOrderTable from './PharmacistOrderTable';
import PharmacistClientTable from './PharmacistClientTable';
import DoctorClientTable from './DoctorClientTable';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
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
    color: #333333;
    float: center;
    display:flex;
    justify-content: center;
    align-content: center;
    margin-bottom: -10px;
    background-color: #f2f2f2;
    border-radius: 10px;
    border-color: #8c8c8c;
    padding: 10px;
`
const NameTitle = styled.h1`
    font-size: 36px;
    font-weight: bold;
    font-family: Arial, Sans;
    color: dark-grey;
    float: center;
    display:flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 20px;
`
const GridContainer = styled.div`
    // column-gap: 30px;
    // width: 117%;
    // height: 90%;
    // display: grid;
    // grid-template-columns: 2fr 3fr;
    margin-top: 50px;
`
const MyButtonToolbar = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    // background-color: red;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`
class Doctor extends React.Component{

    // state = {
    //     display: 'allDrugs',
    // }

    // sideDisplay = () => {
    //     if(this.state.display == 'allDrugs'){
    //         return (
    //             <>
    //                 <Title> Drugs In Stock </Title>
    //                 <DrugTable />
    //             </>
    //         );
    //     } else if(this.state.display == 'orders'){
    //         return (
    //             <>
    //                 <Title> Client Orders </Title>
    //                 <PharmacistOrderTable />
    //             </>
    //         );
    //     } else if(this.state.display == 'clients'){
    //         return (
    //             <>
    //                 <Title> Clients </Title>
    //                 <PharmacistClientTable />
    //             </>
    //         );
    //     }
    // }
    
    // toolBarButtons = (e: any) => {
    //     this.setState({
    //         display: e.target.id
    //     });
    // }

    render(){
        return(
            <>
            <GridContainer>
                {/* <p> */}
                    <NameTitle> Welcome Dr. {ActiveLogin.state.username}, </NameTitle>

                    {/* <MyButtonToolbar>
                        <Button variant="primary" onClick = {(e: any) => {this.toolBarButtons(e)}} id = "allDrugs">View Drugs</Button>
                        <Button variant="primary" onClick = {(e: any) => {this.toolBarButtons(e)}} id = "orders">View Orders</Button>
                        <Button variant="primary" onClick = {(e: any) => {this.toolBarButtons(e)}} id = "clients">View Clients</Button>
                    </MyButtonToolbar> */}
                     <Title> Clients </Title>
                     <DoctorClientTable/>

                {/* </p> */}

                {/* <p>
                    {this.sideDisplay()}
                </p> */}
            </GridContainer>
            </>
        )
    }

}

export default Doctor;