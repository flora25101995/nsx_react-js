import React from 'react';
import './product.css'

class ProductPage extends React.Component {
    constructor () {
        super()
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
                                        <span className="item-title">Hello: </span>
                                        <span className="item-name">{item.name}</span>
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