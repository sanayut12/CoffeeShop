import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Swal from 'sweetalert2';

export default class Login extends Component {

    state = {
        name:"none",
        noUser:0,
        status: "Login",
        position:0,
        noBill:0,
      }

      onNameChange = () => {
        if(this.state.status==="Login")
          this.setState({ status: "Logout"});
        else
          this.setState({ status: "Login"});
      };

    render() {
        if(this.state.status != "Login"){
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
                            <Input type="name" name="name" id="exampleEmail" placeholder="name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">table</Label>
                            <Input type="select" name="select" id="exampleSelect" placeholder="password">
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
                        <Button onClick={this.onNameChange}>Login</Button>
                    </Form>
                    </div>
                </div>       
                
    );
        }
    }
}
