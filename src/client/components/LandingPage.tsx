import * as React from 'react';
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const BoxDiv = styled.div`     
    display:flex;
    justify-content: center;
    align-content: center;
    padding: 25px;
`



class LandingPage extends React.Component{
    render() {
        return(
            <BoxDiv>
                <Container>
                    <Jumbotron>
                        <h1>Welcome to PharmaCare</h1>
                        <p>
                            the online pharmaceutical delivering service
                        </p>
                        <Link to="./signup">
                            <Button className = "btn" bsStyle="primary">Sign Up</Button>
                        </Link>
                    </Jumbotron>
                </Container>
          </BoxDiv>
        )
    }
}

export default LandingPage;