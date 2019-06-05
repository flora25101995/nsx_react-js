import React from 'react';
import './product.css'
import {Button, Card, Image} from "react-bootstrap"
import Cookies from "universal-cookie";

class ProductPage extends React.Component {
    constructor () {
        super()

        const cookies = new Cookies();
        // cookies.set('myCat', 'Products',{ path: '/'});
        console.log(cookies.get('islogin'));

        this.state = {
            data: [
                {
                    name: 'Phuong'
                },
                {
                    name: 'Quyen'
                },
                {
                    name: 'Nguyen'
                },
                {
                    name: 'Hanh'
                },
                {
                    name: 'An'
                },
                {
                    name: 'Do'
                },
                {
                    name: 'Do'
                },
                {
                    name: 'Do'
                },
                {
                    name: 'Do'
                },
                {
                    name: 'Do'
                },
                {
                    name: 'Do'
                },
                {
                    name: 'Do'
                },
                {
                    name: 'Do'
                },
                {
                    name: 'Do'
                },
                {
                    name: 'Do'
                },
            ]
        }
    }
    render () {
        return (
            <React.Fragment>
                <div className="page-home">
                    <ul>
                        {
                            this.state.data.map((item, index) => {
                                return (
                                    <li>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="holder.js/100px250" fluid />
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                        {/* <span className="item-title">Hello: </span>
                                        <span className="item-name"></span> */}
                                    </li>
                                )
                            })
                        }                        
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductPage