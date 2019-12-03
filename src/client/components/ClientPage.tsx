import * as React from 'react';
import {Form, Button, DropdownButton, Dropdown, Table, Jumbotron, Container} from 'react-bootstrap';
import styled from 'styled-components';
import ActiveLogin from '../ActiveLogin';
import DrugTable from './DrugTable';
import ClientOrdertable from './ClientOrdertable'
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
    display:flex;
    justify-content: center;
    
`

//{ActiveLogin.state.username}
class ClientPage extends React.Component {
    
    render() {
		return (
            <div>
            <WelcomeMsg>
                Welcome {ActiveLogin.state.username},
            </WelcomeMsg>
            <SubHead>Recent Orders: </SubHead>
            <Container>
                <ClientOrdertable>   
                </ClientOrdertable>
            </Container>
            
            <ButtonDiv>
                <Button variant="primary">Place Order</Button>
            </ButtonDiv>
            </div>
           
               
        )
    }
}

export default ClientPage;
