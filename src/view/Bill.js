import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import Swal from 'sweetalert2'
const url_api = "https://61b751c7.ngrok.io/";


export default class Bill extends Component {

    state = {
        SaleID:0,
        CustomerID:0,
        MenuBill:[]
      }

    constructor(){
        super()

    }

    async componentDidMount(){
       await this.setState({
            SaleID: this.props.SaleID,
            CustomerID : this.props.CustomerID
            })

            var body = {
                SaleID: this.state.SaleID
                }
            fetch(url_api+'bill',{
                method: 'POST',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            }).then(res => res.json())
            .then(json =>this.setState({MenuBill:json}));





    }

    render() {
        var total = 0
        var items = []
        for (var i = 0;i < this.state.MenuBill.length;i++)
        {
            total = total + this.state.MenuBill[i]["Price"]
            items.push(
                <tbody>
                    <tr>
                        <th scope="row">{i+1}</th>
                        <td>{this.state.MenuBill[i]["ProductName"]}</td>
                        <td>{this.state.MenuBill[i]["Price"]}</td>
                    </tr>
                </tbody>
            )
            
        }
        return (
            <div>
                <h1>
                Bill page
                </h1>
                <div>
                    CustomerId = {this.state.CustomerID} SaleID = {this.state.SaleID}
                </div>
                <div className="p-3 my-2 rounded">
                    <Table>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Menu</th>
                            <th>Price</th>
                            </tr>
                        </thead>
                        {items}

                        <thead>
                            <tr>
                            <th></th>
                            <th></th>
                            <th>amont</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">total</th>
                            <td></td>
                            <td>{total + " ฿"}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
