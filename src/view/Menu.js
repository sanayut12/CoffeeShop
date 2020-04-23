import React, { Component } from 'react'
import { Jumbotron, Container,Badge ,Button,ButtonGroup,Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardGroup, CardDeck, Row,Col} from 'reactstrap';
import Swal from 'sweetalert2';
import './Menu.css'

const url_api = "https://eed0a7d1.ngrok.io/";

export default class Menu extends Component {

    state = {
        SaleID:0,
        CustomerID:0,
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
        this.setState({
            SaleID: this.props.SaleID,
            CustomerID : this.props.CustomerID
        })
        
        console.log(this.state.resultmenu)
        

    }
// 
    onClick = (SaleID,ProductName,ProductID,Price) => {

        var body = {
            SaleID : SaleID,
            ProductName : ProductName,
            ProductID : ProductID,
            Price : Price            
        }

        fetch(url_api+'buyls',{
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => Swal.fire("Buyed"));
    }


    render() {
        var items =[]
        for(var i = 0 ; i< this.state.resultmenu.length;i++){
            let saleid = this.state.SaleID
            let productname = this.state.resultmenu[i]["ProductName"]
            let productid = this.state.resultmenu[i]["ProductID"]
            let price = this.state.resultmenu[i]["Price"]

            console.log(productid)

            items.push(
            <Col>            
                <div className = "sqrmenu" >            
                    <Card>
                        <CardBody>              
                        {/* <CardTitle>{this.state.resultmenu[i]["ProductName"]}</CardTitle> */}
                        </CardBody>
                        <img width="100%" src={this.state.resultmenu[i]["Url"]} alt="Card image cap" />
                        <CardBody>
                        <CardText>{"Type : "+this.state.resultmenu[i]["Type"]}</CardText>
                        <CardText>{"Cost : "+ this.state.resultmenu[i]["Price"] +" ฿"}</CardText>
                      {/* this.state.SaleID,this.state.resultmenu[i]["ProductID"],this.state.resultmenu[i]["Price"] */}
                        <Button className = "fontb" onClick={() => this.onClick(saleid,productname,productid,price)} >Buy</Button>
                        </CardBody>
                    </Card>             
                </div>
            </Col>               
            
            )
        }

        console.log("render")
        console.log(this.state.resultmenu)
        return (
            <div >
                <div>
                    <h1>
                        Menu Page
                    </h1>
                </div>
                <div>
                    CustomerId = {this.state.CustomerID} SaleID = {this.state.SaleID}
                </div>
                <div className = "sqr">
                    <Row className = "backgro">
                    {items}
                    </Row>
                </div>
            </div>

        )
    }
}
