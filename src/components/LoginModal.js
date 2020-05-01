import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, Input, Label, Button, Form, FormGroup, Col } from 'reactstrap';

class Login extends Component {
    
    handleLogin = (event) => {
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render(){
        return(
            <div className="container">
                <Modal isOpen={this.props.isOpen} toggle={this.props.onClick}>
                    <ModalHeader toggle={this.props.onClick}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup row>
                                <Label md={2} htmlFor="username">Username</Label>
                                <Col md={10}>
                                    <Input type="text" id="username" name="username"
                                        innerRef={input => this.username = input}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="password">Password</Label>
                                <Col md={10}>
                                    <Input type="password" id="password" name="password"
                                        innerRef={input => this.password = input}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" id="remember" name="remember" 
                                                innerRef={input => this.remember = input}/>{' '}
                                            <strong>Remember me</strong>
                                        </Label>
                                    </FormGroup>                     
                                </Col>
                            </FormGroup>
                            <Button type="submit" color="primary">Login</Button>{' '}
                            <Button color="secondary" onClick={this.props.onClick}>Cancel</Button>
                        </Form>
                    </ModalBody>
                </Modal>    
            </div>
        )
    }
}

export default Login;