import React, { Component } from 'react';

import Menu from './Menu';
import Dish from './DishDetail';
import { DISHES } from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';

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
        <Header/>
        <Menu dishes={dishSelected} onClick={dishID => {this.onDishSelect(dishID)}}/>
        <Dish dish={dishFiltered[0]}/>   
        <Footer/>            
      </div>
    );
  }
}

export default Main;
