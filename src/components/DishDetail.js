import React, { useState } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import Comment from './Comment';

    const renderDish = selectedDish => { // Normal function with parameter selectedDish
        if (selectedDish != null) {
            return(
                <Card>
                    <CardImg src={selectedDish.image} alt={selectedDish.image}/>
                    <CardBody>
                        <CardTitle>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return <div></div>
        }
    }

    const RenderComments = ({ comments }) => { // Functional Components with props { comments }
        if (comments != null) {
            const dateTimeFormatOption = { year: 'numeric', month: 'long', day: 'numeric' };
            const dateTimeFormat = new Intl.DateTimeFormat('en-US', dateTimeFormatOption);

            const commentList = comments.map(comment => {
                    return(
                        <ul key={comment.id} className="list-unstyled text-left">
                            <li>{comment.comment}</li>
                            <li>
                                -- {comment.author},{' '}  
                                {dateTimeFormat.format(new Date(Date.parse(comment.date)))}
                            </li>
                        </ul>
                    )
                })
                return(
                    <div>
                        <h4>Comments</h4>
                        {commentList}                       
                    </div>
                )
        } else {
            return <div></div>
        }
    }

    const Dish = props => { // Funtional Components

        // Hooks
        const [modal, setModal] = useState(false);
        const toggleModal = () => setModal(!modal);

        if (props.dish != null) {
            return(
                <div>
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{props.dish.name}</h3>
                                <hr/>
                            </div>
                        </div>
                        <div className="row  mt-2  mb-2">
                            <div className="col-12 col-md-5">
                                {renderDish(props.dish)}
                            </div>
                            <div className="col-12 col-md-5">                    
                                <RenderComments comments={props.comments}/>
                                <Button color="secondary" outline onClick={toggleModal}><i class="fas fa-edit"></i>Submit Comment</Button>
                            </div>
                        </div>
                    </div>  
                    <div>
                        <Comment isOpen={modal} onClick={toggleModal} />
                    </div>
                </div>           
            )
        } else {
            return <div/>
        }
        
    }

export default Dish;