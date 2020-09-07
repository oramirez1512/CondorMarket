import React from 'react'
import {Switch,Route,useParams } from 'react-router-dom';
import ProductsContainer from '../containers/productsContainer'
import CartDetailsContainer from '../containers/cartDetailsContainer'
import CategoriesContainer from '../containers/categoriesContainer';
import {Col} from 'react-flexbox-grid';

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { name } = useParams();
  
    return (
        <Col xs ={8} md={8}>
            <ProductsContainer productid={'name/'+{name}} />
        </Col> 
    );
  }
const Routes = ()=>{
    return(
            <Switch>    
                <Route exact path="/">
                    <Col xs ={2} md={2} />
                    <Col xs ={8} md={8}>
                        <ProductsContainer productid={""} />
                    </Col>  
                </Route>
                <Route path="/Categories">
                <Col xs ={2} md={2} />
                    <Col xs ={8} md={8}>
                        <CategoriesContainer categoryid={""}/>
                    </Col>
                </Route>
                <Route path="/Cart">
                    <Col xs ={2} md={2} />
                    <Col xs ={8} md={8}>
                        <CartDetailsContainer shoppingcartid={4} />
                    </Col> 
                </Route>
                <Route  path="/search/:name" children ={<Child />} /> 
            </Switch>
    );
} 

export default Routes