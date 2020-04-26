import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    state = {
            isNavOpen: false
        }

    toggleNavbar = () => {
        this.setState({isNavOpen: !this.state.isNavOpen})
    }   

    render(){
        return(
            <div>
                <Navbar expand="md" dark>
                    <div className="container">
                        <NavbarToggler onClick={this.isNavOpen} />
                        <NavbarBrand href="/" className="mr-auto">
                            <img src='assets/images/logo.png' alt="Everest Cafe" height="30" width="40"/>                      
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i class="fas fa-home fa-lg"></i>Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <i class="fas fa-info fa-lg"></i>About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <i class="fas fa-list fa-lg"></i>Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <i class="fas fa-address-card fa-lg"></i>Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>                        
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }  
}

export default Header;