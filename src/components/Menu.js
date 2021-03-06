import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Loading } from './Loading';
import { baseURL } from '../shared/baseURL';

const Menu = props =>{

        const menu = props.dishes.map(dish => {
            return(
                <div key={dish.id} className="col-12 col-md-3 mt-2 mb-2">
                    <Card>
                        <Link to={`/menu/${dish.id}`}>
                            <CardImg width="100%" src={baseURL + dish.image} alt={dish.image}/>
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Link>                       
                    </Card>
                </div>
            )
        });

        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
        )}
    }

export default Menu;