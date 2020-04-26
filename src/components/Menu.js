import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const Menu = props =>{

        const menu = props.dishes.map(dish => {
            return(
                <div key={dish.id} className="col-12 col-md-3 mt-2 mb-2">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.image}/>
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
            </div>
        )
    }

export default Menu;