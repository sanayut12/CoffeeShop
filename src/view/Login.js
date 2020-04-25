import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText ,Container} from 'reactstrap';
import Swal from 'sweetalert2';

const url_api = "https://7d81b9a7.ngrok.io/";

export default class Login extends Component {

    state = {
        name:"none",
        password:"",
        status: "Login",
        //return to page major
        SaleID:0,
        SaleDateTime:"",
        CustomerID:0,
        table: "1",
        log:1
      }
      onLogin=async()=>{
        console.log("login on")

        var body = {
            name:this.state.name,
            password:this.state.password,
            table:this.state.table
        }

        const result = await fetch(url_api+'login',{
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
        .then(json => this.setState({
            status: String(json.status),
            SaleID: json.SaleID,
            CustomerID: json.CustomerID
        }));
       
        //Swal.fire(""+this.state.name+" "+this.state.password+" "+this.state.table+"")
        console.log("finish")
        await this.onMessage()
        
      }
      onMessage = () => {
        var {SaleID,CustomerID,status} = this.state

        if (status=="Logout"){
            this.setState({log:2})
            Swal.fire("Login pass")
            this.props.onStatusChange(SaleID,CustomerID,status)
            console.log("log = "+this.state.log)
        }
        else{
            Swal.fire("Name or Password not correct")
            this.setState({log:1})
        }
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

    render() {
        if(this.state.status == 2){            
            return(
            <div>
                {/* Login success! status = {this.state.status} table = {this.state.table} CustomerId = {this.state.CustomerID} SaleID = {this.state.SaleID} */}
            </div>
            )
        }
        else{
            return (
                <div>
                    {/* <div>
                        status = {this.state.status} table = {this.state.table} CustomerId = {this.state.CustomerID} SaleID = {this.state.SaleID}
                    </div> */}
                    <div>
                    <h2>Login page </h2>    
                    </div>
                    <div  >
                    <Container className = "formbox" >
                        <Form >
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
                    </Container>
                    </div>
                </div>       
                
    );
        }
    }
}
