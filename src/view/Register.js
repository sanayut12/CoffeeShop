import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Swal from 'sweetalert2';
import axios from 'axios'
const fetch = require('node-fetch')

export default class Register extends Component {

    state={
        name:"",
        password:"",
        gender:"Male",
        phone:""
    }

    //  async post(){
        
    //     await fetch("https://0fc12966.ngrok.io/register",{
    //         headers: {'Content-Type': 'application/json'},
    //           method: "POST",
    //           body: JSON.stringify(this.data)
    //     }).then(res => console.log(res) )
    // }

    componentDidMount(){
        // this.post()
        console.log("compunanditmout")

        fetch("https://c97b6cf3.ngrok.io/register",{
            method:"POST",
            body: {
                name:"name",
                pass:"pass"
            }
        }).then(response=>{console.log(response)})

        console.log("end.......................")
    }

    onChangeName=e=>{
        this.setState({
            name: e.target.value
        })
    }
    onChangePassword=e=>{
        this.setState({
            password: e.target.value
        })
    }
    onChangeGender=e=>{
        this.setState({
            gender: e.target.value
        })
    }
    onChangePhone=e=>{
        this.setState({
            phone: e.target.value
        })
    }

    onClick=()=>{
        Swal.fire(this.state.name +" "+ this.state.password+" "+this.state.gender+" "+this.state.phone);

        const obj = {
            name:this.state.name,
            password:this.state.password,
            gender:this.state.gender,
            phone:this.state.phone
        }
        console.log(obj)
    }

    render() {
        if(false)
        {
            return(
            <div>
ddfdf
            </div>
            );
        }
        else{
            return (
                <div>
                    Register page
                    <div>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">name</Label>
                            <Input type="name" placeholder="name" value={this.state.name} onChange={this.onChangeName}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChangePassword}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Gender</Label>
                            <Input type="select" name="select" placeholder="gender" value={this.state.gender} onChange={this.onChangeGender}>
                            <option>Male</option>
                            <option>Female</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Phone</Label>
                            <Input type="name" name="Phone" placeholder="phone" value={this.state.phone} onChange={this.onChangePhone}/>
                        </FormGroup>
                        <Button onClick={this.onClick}>Submit</Button>
                        </Form>
                    
                    </div>
                </div>
            )
        }

        
    }
}
