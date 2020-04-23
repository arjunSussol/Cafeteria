import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Dish from './DishDetail';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
           selectedDish: null
        };
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish})
    };

    render(){
        const menu = this.props.dishes.map(dish => {
            return(
                <div className="col-12 col-md-3 mt-2">
                    <Card key={dish.id} onClick={()=>this.onDishSelect(dish)}>
                        <CardImg width="100%" object src={dish.image} alt={dish.image}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <Dish selectedDish={this.state.selectedDish}/>               
            </div>
        )
    }
}

export default Menu;