import React from 'react';
import styled from 'styled-components'


const ImgConst = styled.img` 
    object-fit: none;
    object-position: center;
    width: 100%;
    max-height: 100px;
    margin-bottom: 1rem;
    margin-top: 2px;
`


class About extends React.Component{
    state = {
    
       
    };
     
    render() {
        return(
            <div>
               <ImgConst src="https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=350&w=1000" ></ImgConst>
               
            <h1>PharmaCare</h1>
            <h2> shamin betcg hehe</h2>
            </div>
        )
    }
}

export default About;

