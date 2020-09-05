import React, { Component } from 'react';
import Products from '../components/Products'

class ProductsContainer extends Component {
    
    state = {
        products: []
      };
    componentDidMount() {
        const {productid} = this.props;
        fetch('http://localhost:3000/api/ormarket/product/'+productid)
            .then(res => res.json())
            .then((data) => {
                this.setState({ products: data })
            })
            .catch(console.log)   
      }

      render () {
        return (
          <Products products={this.state.products} />
        );
      }

}

export default ProductsContainer