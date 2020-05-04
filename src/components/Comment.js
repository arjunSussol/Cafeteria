import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Label, Col, Button, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

const Comment = props => {
        // Hooks
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    const handleSubmit = values => {
        toggleModal();
        props.addComment(props.dishId, values.rating, values.author, values.comment);
    }

        return(
            <div className="container">
                <Button color="secondary" outline onClick={toggleModal}><i className="fas fa-edit"></i>Submit Comment</Button>
                <Modal isOpen={modal} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => handleSubmit(values)}>
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
                            <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>    
            </div>
        )
}

export default Comment;