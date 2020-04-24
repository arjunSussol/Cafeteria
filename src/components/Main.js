import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './Menu';
import Dish from './DishDetail';
import { DISHES } from '../shared/dishes';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

  onDishSelect = dishID => {
    this.setState({selectedDish: dishID})
    };

  render(){
    let dishSelected = this.state.dishes
    let dishFiltered = dishSelected.filter(dish => {
      return dish.id === this.state.selectedDish
    })

    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              Everest Cafe
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={dishSelected} onClick={dishID => {this.onDishSelect(dishID)}}/>
        <Dish dish={dishFiltered[0]}/>               
      </div>
    );
  }
}

export default Main;
