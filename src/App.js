import React, { Component,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2';
import Menu from './view/Menu';
import Bill from './view/Bill';
import Promotion from './view/Promotion'
import Profile from './view/Profile'
import Register from './view/Register'
import Login from './view/Login'

import { Jumbotron,Badge ,Button,ButtonGroup,Card, CardImg, CardText, CardBody, CardLink,Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  CardTitle, CardSubtitle} from 'reactstrap';
import {Route,Link} from "react-router-dom";


class App extends Component{

  state = {
    SaleID:0,
    CustomerID:0,
    status: "Login"
  }

  onStatusChange = (SaleID,CustomerID,status) => {
    this.setState({    
      SaleID: SaleID,
      CustomerID: CustomerID,
      status: status
    })
  }

  onNameChange = () => {    
    if(this.state.status !="Login"){
      Swal.fire('Logout seccess');
      this.setState({ status: "Logout"});   
    } 

  };


  render(){

    return (
      <div className="App">
        <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Home</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/users">Users</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/posts">Posts</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/chat">Chat</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        <div> 
        <div>
            <ButtonGroup className="col2">
                  <Link to='./menu'><Button color="primary">Menu</Button></Link>
                  <Link to='./bill'><Button color="primary">Bill</Button></Link>
                  <Link to='./promotion'><Button color="primary">Promotions</Button></Link>
                  <Link to='./profile'><Button color="primary">Profile</Button></Link>
                  <Link to='./register'><Button color="primary">Register</Button></Link>
                  <Link to='./login'><Button color="primary" onClick={this.onNameChange}>{this.state.status}</Button></Link>
            </ButtonGroup>
          </div>       
        <div >
          <Jumbotron className = 'Jumbotron'>
            <h1>
            <h1><Badge>Coffee Time </Badge></h1>
            </h1>
              
              <p> <center><h3 className="h3">บริการสั่งอาหารแบบ online</h3></center>  </p>
          </Jumbotron>
        </div>
        {/*     name:"none",
    SaleID:0,
    SaleDateTime:"",
    CustomerID:0,
    StaffID:0,
    table:"",
    status: "Login" */}
        {/* <div>
            <div>
              status = {this.state.status} CustomerId = {this.state.CustomerID} SaleID = {this.state.SaleID}
            </div>
            
            <div>
            Id = {this.state.CustomerID} 
            </div>
        </div>    */}
        </div>
        <div className = "images">           
          <Route path="/menu" component={()=>(<Menu SaleID={this.state.SaleID} CustomerID = {this.state.CustomerID}/>)}/>   
          <Route path="/bill" component={()=>(<Bill SaleID={this.state.SaleID} CustomerID = {this.state.CustomerID}/>)}/> 
          <Route path="/promotion" component={Promotion}/> 
          <Route path="/profile" component={Profile}/> 
          <Route path="/register" component={Register}/> 
          <Route path="/login" component={()=>(<Login onStatusChange={this.onStatusChange} />)}/>
        </div>
     
       
  
      </div>
    );
  }

  
}

export default App;


//  <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>