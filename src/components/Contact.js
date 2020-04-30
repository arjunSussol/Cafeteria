import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Label, Input, Form, FormGroup, Col, Button, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            telNum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstName: false,
                lastName: false,
                telNum: false,
                email: false
            }
        };
    }

    handleBlur = field => evt => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleValidation = (firstName, lastName, telNum, email) => {
        const errors = {
            firstName: '',
            lastName: '',
            telNum: '',
            email: ''
        };

        if (this.state.touched.firstName && firstName.length < 3)
            errors.firstName = 'First name should contain at least 3 characters.'
        if (this.state.touched.lastName && lastName.length < 3)
            errors.lastName = 'Last name should contain at least 3 characters.'
        
        const regInt = /^\d+$/;  
        if (this.state.touched.telNum && !regInt.test(telNum))
            errors.telNum = 'Telephone number should contain only numbers.'
        
        const regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;    
        if (this.state.touched.email && !regEmail.test(email))
            errors.email = 'Email should be valid.'
        
        return errors;
    }

    handleInputChanges = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }    

    handleSubmit = event => {
        alert('Current state is: '+JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        const error = this.handleValidation(this.state.firstName, this.state.lastName, this.state.telNum, this.state.email);

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">                    
                        <h3>Contact Us</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fas fa-phone"></i>: +852 1234 5678<br />
                            <i className="fas fa-fax"></i>: +852 8765 4321<br />
                            <i className="fas fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fas fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="/"><i className="fab fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fas fa-envelope"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstName" name="firstName" placeholder="First Name" 
                                        value={this.state.firstName} 
                                        valid={error.firstName === ''}
                                        invalid={error.firstName !== ''}
                                        onChange={this.handleInputChanges}
                                        onBlur={this.handleBlur('firstName')}/>
                                    <FormFeedback>{error.firstName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastName" name="lastName" placeholder="Last Name" 
                                        value={this.state.lastName} 
                                        valid={error.lastName === ''}
                                        invalid={error.lastName !== ''}
                                        onChange={this.handleInputChanges}
                                        onBlur={this.handleBlur('lastName')}/>
                                    <FormFeedback>{error.lastName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telNum" md={2}>Tel. Number</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telNum" name="telNum" placeholder="Telephone Number" 
                                        value={this.state.telNum} 
                                        valid={error.telNum === ''}
                                        invalid={error.telNum !== ''}
                                        onChange={this.handleInputChanges}
                                        onBlur={this.handleBlur('telNum')}/>
                                    <FormFeedback>{error.telNum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email" placeholder="Email" 
                                        value={this.state.email} 
                                        valid={error.email === ''}
                                        invalid={error.email !== ''}
                                        onChange={this.handleInputChanges}
                                        onBlur={this.handleBlur('email')}/>
                                    <FormFeedback>{error.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" id="agree" name="agree" 
                                                checked={this.state.agree} onChange={this.handleInputChanges}/>{' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>                     
                                </Col>
                                <Col md={{ size: 3, offset: 1}}>
                                    <Input type="select" id="contactType" name="contactType" value={this.state.contactType} onChange={this.handleInputChanges}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" placeholder="Your Feedback" 
                                        rows="12" value={this.state.message} onChange={this.handleInputChanges}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button color="primary" type="submit">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Contact;