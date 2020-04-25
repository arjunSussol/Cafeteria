import React from 'react';
import { Navbar, NavbarBrand, Jumbotron} from 'reactstrap';

const Header = () => {
    return(
        <React.Fragment>
            <Navbar color="primary" dark>
                <div className="container">
                    <NavbarBrand href="/">CafeTime</NavbarBrand>
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
        </React.Fragment>
    )
}

export default Header;