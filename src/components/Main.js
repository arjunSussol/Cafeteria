import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Menu from './Menu';
import Dish from './DishDetail';
import { COMMENTS } from '../shared/comments';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: COMMENTS,
      dishes: DISHES,
      leaders: LEADERS,
      promotions: PROMOTIONS,
    }
  }

  
  render(){
    let commentSelected = this.state.comments
    let dishSelected = this.state.dishes
    let leaderSelected = this.state.leaders
    let promotionSelected = this.state.promotions

    const HomePage = () => {
      return(
        <Home dish={dishSelected.filter(dish => dish.featured)[0]}
        leader={leaderSelected.filter(leader => leader.featured)[0]}
        promotion={promotionSelected.filter(promo => promo.featured)[0]}
        />
      )
    }

    const DishWithID = ({ match }) => {
      return(
        <Dish dish={dishSelected.filter(dish => dish.id === parseInt(match.params.dishID,10))[0]}
        comments={commentSelected.filter(comment => comment.dishId === parseInt(match.params.dishID,10))}/>
      )
    }

    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route exact path='/menu' component={()=> <Menu dishes={dishSelected}/>}/>
          <Route path='/menu/:dishID' component={DishWithID}/>
          <Route exact path='/contact' component={Contact}/>
          <Redirect to='/home'/>
        </Switch>   
        <Footer/>            
      </div>
    );
  }
}

export default Main;
