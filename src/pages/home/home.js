import React from 'react';
import './home.css'
import {Button, ButtonToolbar} from "react-bootstrap"

class HomePage extends React.Component{
    render () {
        return (
            <React.Fragment>
                <div>
                    <h1>HOME PAGE</h1>
                    <ButtonToolbar>
                        <Button variant="outline-primary">Primary</Button>
                        <Button variant="outline-secondary">Secondary</Button>
                        <Button variant="outline-success">Success</Button>
                        <Button variant="outline-warning">Warning</Button>
                        <Button variant="outline-danger">Danger</Button>
                        <Button variant="outline-info">Info</Button>
                        <Button variant="outline-light">Light</Button>
                        <Button variant="outline-dark">Dark</Button>
                    </ButtonToolbar>            
                </div>
            </React.Fragment>
        )
    }
}

export default HomePage