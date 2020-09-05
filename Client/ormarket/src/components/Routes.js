import React from 'react'
import {Switch,Route } from 'react-router-dom';
import ProductsContainer from '../containers/productsContainer'
import CartDetailsContainer from '../containers/cartDetailsContainer'
import CategoriesContainer from '../containers/categoriesContainer';
import {Col} from 'react-flexbox-grid';
const Routes = ()=>{
    return(
            <Switch>    
                <Route exact path="/">
                    <Col xs ={12} md={6}>
                        <ProductsContainer productid={""} />
                    </Col>
                    <Col xs ={12} md={6}>
                        <CartDetailsContainer shoppingcartid={4} />
                    </Col>  
                </Route>
                <Route path="/Categories">
                    <Col xs ={12} md={6}>
                        <CategoriesContainer categoryid={""}/>
                    </Col>
                    <Col xs ={12} md={6}>
                        <CartDetailsContainer shoppingcartid={4} />
                    </Col> 
                </Route>
                <Route path="/Cart">
                    <Col xs ={12} md={8}>
                        <CartDetailsContainer shoppingcartid={4} />
                    </Col> 
                </Route>
            </Switch>
    );
} 

export default Routes