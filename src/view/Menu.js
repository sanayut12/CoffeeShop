import React, { Component } from 'react'
import { Jumbotron, Container,Badge ,Button,ButtonGroup,Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardGroup, CardDeck} from 'reactstrap';

import './Menu.css'

const url_api = "https://1193fc89.ngrok.io/";

export default class Menu extends Component {

    state = {
        name:"none",
        password:"",
        status: "notpass",
        //return to page major
        SaleID:0,
        SaleDateTime:"",
        CustomerID:0,
        table:"",
        resultmenu:[]
      }

    async componentDidMount(){
        console.log("menu start")

        const result = await fetch(url_api+'menu',{
            method: 'POST',
        }).then(res => res.json())
        .then(json => this.setState({resultmenu:json}));

        //Swal.fire(this.state.status)
        //Swal.fire(""+this.state.name+" "+this.state.password+" "+this.state.table+"")
        console.log("menu end")


    }



    render() {
        var items =[]
        for(var i = 0 ; i< this.state.resultmenu.length;i++){
            items.push(
            
            <div className = "sqrmenu" >
            
                <Card>
                    <CardBody>              
                    <CardTitle>{this.state.resultmenu[i]["ProductName"]}</CardTitle>
                    </CardBody>
                    <img width="100%" src={this.state.resultmenu[i]["Url"]} alt="Card image cap" />
                    <CardBody>
                    <CardText>{"Type : "+this.state.resultmenu[i]["Type"]}</CardText>
                    <CardText>{"Cost : "+ this.state.resultmenu[i]["Price"] +" ฿"}</CardText>
                    <Button className = "fontb">Buy</Button>
                    </CardBody>
                </Card>
                 
                </div>
               
            
            )
        }
            //ได้ยินเสียงไหมครับ55
        
        console.log("render")
        console.log(this.state.resultmenu)
        return (
            <div >
                <div className = "sqr" >
                    {items}
                </div>
            </div>

        )
    }
}
