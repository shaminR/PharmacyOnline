import * as React from 'react';
import {Form, Button, DropdownButton, Dropdown} from 'react-bootstrap';
import styled from 'styled-components';
import ActiveLogin from '../ActiveLogin';

class UserPage extends React.Component{

    state = {
        username: '',
        password: '',
        type: ''
    }

    getAllRecords = () => {
        console.log(this.state.type);
        this.find();
    }
    async getAllRecord(){
        try {
            let r = await fetch('/api/healthrecords');
            let healthrecords = await r.json();
            console.log(healthrecords);
        } catch (error) {
            console.log(error);
        }
    }
    async find() {
        try {
            let r = await fetch('/api/healthrecords',{          //JSON.stringify({username: 'rahman', password: '8002'})
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            });
            let result = await r.json();
            console.log(result);

        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return(

            <div style = {{paddingTop: '10px'}}>

                Client Page

            </div>
        )
    }

}

export default UserPage;
