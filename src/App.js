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

import { Jumbotron, Container,Badge ,Button,ButtonGroup,Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle} from 'reactstrap';
import {Route,Link} from "react-router-dom";


class App extends Component{

  state = {
    name:"none",
    SaleID:0,
    SaleDateTime:"",
    CustomerID:0,
    StaffID:0,
    table:"",
    status: "Login"
  }

  onStatusChange = status =>{
    this.setState({status: status })
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
              <h1><Badge>Coffee Home </Badge></h1>
              <p> <center><h3 className="h3">บริการสั่งอาหารแบบ online</h3></center>  </p>
          </Jumbotron>
        </div>

        </div>
        <div className = "images">           
          <Route path="/menu" component={Menu}/>   
          <Route path="/bill" component={Bill}/> 
          <Route path="/promotion" component={Promotion}/> 
          <Route path="/profile" component={Profile}/> 
          <Route path="/register" component={Register}/> 
          <Route path="/login" component={()=>(<Login onNameChange={this.onStatusChange} />)}/>
        </div>
        <div>
        {/* https://drive.google.com/open?id=  1zfyxm45hxP375PGNxk6ancT8Fx32V8Gb */}
        {/* https://drive.google.com/uc?=1zfyxm45hxP375PGNxk6ancT8Fx32V8Gb */}
        {/* https://drive.google.com/open?id=1yVCerW2GF_u5ejWXtW-w_lSSbdpQ3qfv https://drive.google.com/open?id=1zfyxm45hxP375PGNxk6ancT8Fx32V8Gb*/}
        {/* https://drive.google.com/open?id=1q2biK9MhoDtUEguTmD-Kr_g95xuBWVy1 */}

        {/* https://doc-00-6c-docs.googleusercontent.com/docs/securesc/4s6r029m4jklecgt9ke8qa091k9r8ajp/ipe2v6v8g7gpbk52vr9ohdbj3kv1rhjt/1587402525000/02106328884438513857/02821081377996179379/1q2biK9MhoDtUEguTmD-Kr_g95xuBWVy1?h=13182309279141087860&authuser=0 */}
        {/* https://doc-04-6c-docs.googleusercontent.com/docs/securesc/4s6r029m4jklecgt9ke8qa091k9r8ajp/hk35gf65ulsd1vtm8em9unco4s5k41ii/1587402825000/02106328884438513857/02821081377996179379/1zfyxm45hxP375PGNxk6ancT8Fx32V8Gb?h=13182309279141087860&authuser=0&nonce=t32caest786qq&user=02821081377996179379&hash=hd72lpc9br7269caq73gjoe83th3r2mb */}
          {/* <img src = "https://drive.google.com/uc?id=1yVCerW2GF_u5ejWXtW-w_lSSbdpQ3qfv" alt="new" className = "img"/> */}
        </div>        
        {/* <div>
          <Card>
            <CardBody>              
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
            </CardBody>
            <img width="100%" src="https://drive.google.com/uc?id=1l9n0UDglXiKGwzMvUkE9WGyl2WS0Blr5" alt="Card image cap" />
            <CardBody>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
        </div> */}
  
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