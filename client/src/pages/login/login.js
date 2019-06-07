import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap"
const axios = require('axios');


class LoginPage extends React.Component{
    constructor() {
        super()
        this.state = {
            response: ''
        }
    }
    componentDidMount() {
        let self = this
        axios.get('http://localhost:4000/api/hello')
        .then(function (response) {
          // handle success
          console.log(response);
          let els = response.data.members.map((key, index) => {
              return (
                  <li key={index}>{key.name} - {key.class}></li>
              )
          })
          console.log(els)
          self.setState({
              response: els
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
              
    }
    render () {
        return (
                <React.Fragment>
                    <ul>
                        {
                            this.state.response
                        }
                    </ul>
                    <div className="login-main">
                        <h2>LOGIN</h2>

                        <Container>
                            <Row>
                                <Col></Col>
                                <Col xs={5}>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address{this.state.response}</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email"  />

                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>                        
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicChecbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit" style={{ width: '8rem' }}>
                                            Submit
                                        </Button>

                                    </Form>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default LoginPage