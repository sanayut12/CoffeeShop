import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Swal from 'sweetalert2';

const url_api = "https://18774332.ngrok.io/";

export default class Login extends Component {

    state = {
        name:"none",
        password:"",
        noUser:"",
        status: "notpass",
        table:"",
        noBill:"",
      }

      onLogin=async()=>{
        console.log("login on")

        var body = {
            name:this.state.name,
            password:this.state.password
        }

        const result = await fetch(url_api+'login',{
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
        .then(json => this.setState({status: String(json.status)}));
        Swal.fire(this.state.status)
        //Swal.fire(""+this.state.name+" "+this.state.password+" "+this.state.table+"")
        console.log("finish")
      }

      onNameChange = e => {
        this.setState({
            name:e.target.value
        })
      };
      onPasswordChange=e=>{
          this.setState({
              password:e.target.value
            })
      }
      onTableChange=e=>{
        this.setState({
            table:e.target.value
        })
      }
      onSummit=()=>{
          var body = {
            name:this.state.name,
            password:this.state.password,
            table:this.state.table,
          }

          
      }

    render() {
        if(this.state.status == "pass"){
            return(
                <div>
                Login secces
            </div>
            )
        }
        else{
            return (
                <div>
                    <div>
                        <h2>Login page</h2>    
                    </div>
                    <div>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">name</Label>
                            <Input type="name" name="name" id="exampleEmail" placeholder="name" onChange={this.onNameChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={this.onPasswordChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">table</Label>
                            <Input type="select" name="select" id="exampleSelect" placeholder="password" onChange={this.onTableChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>

                            </Input>
                        </FormGroup>
                        <Button onClick={this.onLogin}>Login</Button>
                    </Form>
                    </div>
                </div>       
                
    );
        }
    }
}
