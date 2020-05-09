import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import Menu from './Menu';
import Dish from './DishDetail';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return{
    comments: state.comments,
    dishes: state.dishes,
    leaders: state.leaders,
    promotions: state.promotions,
  }
};

const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  
  render(){
    let commentSelected = this.props.comments
    let dishSelected = this.props.dishes
    let leaderSelected = this.props.leaders
    let promotionSelected = this.props.promotions

    const HomePage = () => {
      return(
        <Home dish={dishSelected.dishes.filter(dish => dish.featured)[0]}
        dishesLoading={dishSelected.isLoading}
        dishesErrMess={dishSelected.errMess}
        leader={leaderSelected.filter(leader => leader.featured)[0]}
        promotion={promotionSelected.promotions.filter(promo => promo.featured)[0]}
        promoLoading={promotionSelected.isLoading}
        promoErrMess={promotionSelected.errMsg}
        />
      )
    }

    const DishWithID = ({ match }) => {
      return(
        <Dish dish={dishSelected.dishes.filter(dish => dish.id === parseInt(match.params.dishID,10))[0]}
        isLoading={dishSelected.isLoading}
        errMess={dishSelected.errMess}
        comments={commentSelected.comments.filter(comment => comment.dishId === parseInt(match.params.dishID,10))}
        commentsErrMess={commentSelected.errMsg}
        postComment={this.props.postComment}/>
      )
    }

    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route exact path='/about' component={()=> <About leaders={leaderSelected}/>}/>
          <Route exact path='/menu' component={()=> <Menu dishes={dishSelected.dishes}/>}/>
          <Route path='/menu/:dishID' component={DishWithID}/>
          <Route exact path='/contact' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />}/>
          <Redirect to='/home'/>
        </Switch>   
        <Footer/>            
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
