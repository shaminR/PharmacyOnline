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
const SubTitle = styled.h2` 
    //font-family: 'Open Sans';
    font-size: 20px;
    color: #0091ea;
`
class About extends React.Component{
    state = {
    
    };
     
    render() {
        return(
            <div>
               <ImgConst src="https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=350&w=1000" ></ImgConst>
               
            <h1>PharmaCare</h1>
            <SubTitle>Delivering your prescriptions when you need them, where you need them</SubTitle>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dignissimos eveniet saepe facilis molestiae, repellendus esse optio sequi accusantium ad soluta quod nostrum cum neque? Ipsam exercitationem numquam eos blanditiis.</p> 
            </div>
        )
    }
}

export default About;

