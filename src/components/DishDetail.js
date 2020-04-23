import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';

class Dish extends Component{

    renderDish(selectedDish){
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

    renderComments(comments){
        if (comments != null) {
            const dateTimeFormatOption = { year: 'numeric', month: 'long', day: 'numeric' };
            const dateTimeFormat = new Intl.DateTimeFormat('en-US', dateTimeFormatOption);

            const commentList = comments.map(comment => {
                    return(
                        <ul key={comment.id} className="list-unstyled text-left">
                            <li>{comment.comment}</li>
                            <li>
                                -- {comment.author},{' '}  
                                {dateTimeFormat.format(new Date(comment.date))}
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

    render(){
        if (this.props.selectedDish != null) {
            return(
                <div className="row">
                    <div className="col-12 col-md-5 mt-2">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 mt-2">                    
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            )
        } else {
            return <div/>
        }
        
    }
}

export default Dish;