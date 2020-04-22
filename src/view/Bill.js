import React, { Component } from 'react'
import {Table} from 'react-bootstrap'

const url_api = "https://59135ca0.ngrok.io/";


export default class Bill extends Component {

    state = {
        SaleID:0,
        CustomerID:0
      }

    componentDidMount(){
        this.setState({
            SaleID: this.props.SaleID,
            CustomerID : this.props.CustomerID
        })

        // fetch(url_api+'bill',{
        //     method: 'POST',
        //     body: JSON.stringify(body),
        //     headers: { 'Content-Type': 'application/json' },
        // })
        // .then(res => res.json())
        // .then(json => Swal.fire("Buyed"));
    }

    render() {
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
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Table>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th></th>
                            <th>amont</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
