import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2';
import Menu from './view/Menu';
import Bill from './view/Bill';
import Promotion from './view/Promotion'
import Profile from './view/Profile'
import Register from './view/Register'
import Login from './view/Login'

import { Jumbotron, Container,Badge ,Button,ButtonGroup} from 'reactstrap';
import {Route,Link} from "react-router-dom";


class App extends Component{

  state = {
    name:"none",
    noUser:0,
    status: "Login",
    position: {
      address:"",
      at:"",
    },
    noBill:0,
  }

  onNameChange = () => {
    
    if(this.state.status==="Login"){
      
      this.setState({ status: "Logout"});
    }
    else{
      Swal.fire('Logout seccess');
      this.setState({ status: "Login"});      
    }    
      

  };

  render(){
    return (
      <div className="App">

        <div>        
        <div >
          <Jumbotron className = 'Jumbotron'>
              <h1><Badge>Coffee Home </Badge></h1>
              <p> <center><h3 className="h3">บริการสั่งอาหารแบบ online</h3></center>  </p>
          </Jumbotron>
        </div>
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
        </div>
        <div className = "images">  
          
          <Route path="/menu" component={Menu}/>   
          <Route path="/bill" component={Bill}/> 
          <Route path="/promotion" component={Promotion}/> 
          <Route path="/profile" component={Profile}/> 
          <Route path="/register" component={Register}/> 
          <Route path="/login" component={Login}/> 

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