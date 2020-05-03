import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Label, Col, Button, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Comment extends Component{
    handleSubmit = values => {
        alert('Current state is: '+JSON.stringify(values));
    }

    render(){
        return(
            <div className="container">
                <Modal isOpen={this.props.isOpen} toggle={this.props.onClick}>
                    <ModalHeader toggle={this.props.onClick}>Login</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label md={2} htmlFor="rating">Rating</Label>
                                <Col md={10}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={2} htmlFor="author">Author</Label>
                                <Col md={10}>
                                    <Control.text model=".author" id="author" name="author" placeholder="Your Name" 
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={2} htmlFor="comment">Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment" placeholder="Comment" 
                                        rows="6" className="form-control"/>                     
                                </Col>
                            </Row>
                            <Button type="submit" color="primary">Submit</Button>{'  '}
                            <Button color="secondary" onClick={this.props.onClick}>Cancel</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>    
            </div>
        )
    }
}

export default Comment;