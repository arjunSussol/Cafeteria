import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Menu from './Menu';
import Dish from './DishDetail';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';

const mapStateToProps = state => {
  return{
    comments: state.comments,
    dishes: state.dishes,
    leaders: state.leaders,
    promotions: state.promotions,
  }
}

class Main extends Component {
  render(){
    let commentSelected = this.props.comments
    let dishSelected = this.props.dishes
    let leaderSelected = this.props.leaders
    let promotionSelected = this.props.promotions

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
          <Route exact path='/about' component={()=> <About leaders={leaderSelected}/>}/>
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

export default withRouter(connect(mapStateToProps)(Main));
