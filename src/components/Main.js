import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Menu from './Menu';
import Dish from './DishDetail';
import { DISHES } from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
    }
  }

  render(){
    let dishSelected = this.state.dishes
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route exact path='/menu' component={()=> <Menu dishes={dishSelected}/>}/>
          <Route exact path='/dish' component={()=> <Dish dish={dishSelected[0]}/>}/>
          <Redirect to='/home'/>
        </Switch>   
        <Footer/>            
      </div>
    );
  }
}

export default Main;
