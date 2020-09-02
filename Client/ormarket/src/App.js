import React, {Component} from 'react';
import './App.css';
import ProductsContainer from './containers/productsContainer'
import CartDetailsContainer from './containers/cartDetailsContainer'
import ProdByCategoriesContainer from './containers/prodByCateContainer'
class App extends Component {
  render () {
    return (
      <div>
      <ProductsContainer productid={""}/>
      <CartDetailsContainer shoppingcartid={4} />
      <ProdByCategoriesContainer categoryid={1}/>

      </div>
    );
  }
  
}



export default App;
