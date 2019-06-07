import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap"

class LoginPage extends React.Component{
    render () {
        return (
                <React.Fragment>
                    <div className="login-main">
                        <h2>LOGIN</h2>

                        <Container>
                            <Row>
                                <Col></Col>
                                <Col xs={5}>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
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