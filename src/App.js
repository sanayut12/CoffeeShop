import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Container,Badge ,Button,ButtonGroup} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <div>
        <Jumbotron className="Jumbotron">
            <h1><Badge>Coffee Home </Badge></h1>
            <p> <center><h3 className="h3">เว็บสำหรับสั่งอาหารของทางร้าน</h3></center>  </p>
        </Jumbotron>
      </div>

      <div>
          <ButtonGroup>
                <Button>หน้าหลัก</Button>
                <Button>เมนู</Button>
                <Button>promotions</Button>
                <Button>profile</Button>
                <Button>register</Button>
                <Button>login</Button>
          </ButtonGroup>
      </div>
    </div>
  );
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