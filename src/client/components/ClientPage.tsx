import * as React from 'react';
import {Form, Button, DropdownButton, Dropdown, Table, Jumbotron, Container} from 'react-bootstrap';
import styled from 'styled-components';
import ActiveLogin from '../ActiveLogin';
import DrugTable from './DrugTable';
import ClientOrdertable from './ClientOrdertable'
import ClientDrugTable from './ClientDrugTable'
import drugs from '../../server/database/drugs';
const SubHead = styled.h2` 
    //font-family: 'Open Sans';
    font-size: 25px;
    color: #0091ea;
    //margin-top: 20px;
    margin-bottom: 10px;
`
const WelcomeMsg = styled.h1` 
    margin-top: 50px;
    margin-bottom: 20px;
`
const ButtonDiv:any = styled.div`     
     display: flex;
    justify-content: center;
    align-content: center;
    // background-color: red;
    gap: 10px;
 `

//{ActiveLogin.state.username}
class ClientPage extends React.Component {
    state = {
        display: 'previousOrders',
    }

    toolBarButtons = (e: any) => {
        this.setState({
            display: e.target.id
        });
    }

    chooseDisplay = () => {
        if((this.state.display == 'previousOrders')){
            return(
                <>
                <SubHead>Recent Orders: </SubHead> 
                <ClientOrdertable>   
                </ClientOrdertable>
                </>
            );
        }else if(this.state.display == 'allDrugs'){
            return (
                <>
                <SubHead>All Drugs: </SubHead>
                    <ClientDrugTable>
                    </ClientDrugTable>
                </>
            );
        }
    }
    render() {
		return (
            <div>
            <WelcomeMsg>
                Welcome {ActiveLogin.state.username},
            </WelcomeMsg>
            <ButtonDiv>
            <Button variant="primary" onClick = {(e: any) => {this.toolBarButtons(e)}} id = "allDrugs">Place Order</Button>
            <Button variant="primary" onClick = {(e: any) => {this.toolBarButtons(e)}} id = "previousOrders">View Previous Orders</Button>
            </ButtonDiv>
           
            <Container>
                 {this.chooseDisplay()}
            </Container>
        
            </div>
           
               
        )
    }
}

export default ClientPage;
