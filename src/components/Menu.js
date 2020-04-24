import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const Menu = props =>{

        const menu = props.dishes.map(dish => {
            return(
                <div className="col-12 col-md-3 mt-2">
                    <Card key={dish.id} onClick={()=>props.onClick(dish.id)}>
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
            </div>
        )
    }

export default Menu;