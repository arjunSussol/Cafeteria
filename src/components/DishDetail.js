import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';

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
        if (props.dish != null) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 mt-2">
                            {renderDish(props.dish)}
                        </div>
                        <div className="col-12 col-md-5 mt-2">                    
                            <RenderComments comments={props.dish.comments}/>
                        </div>
                    </div>
                </div>             
            )
        } else {
            return <div/>
        }
        
    }

export default Dish;