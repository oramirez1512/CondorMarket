import React, { Component } from 'react';
import Products from '../components/Products';

class ProdByCateContainer extends Component
{
    state = {
        products: []
    };
    componentDidMount() {
        const {categoryid} = this.props;
        fetch('http://localhost:3000/api/ormarket/product/category/'+categoryid)
            .then(res => res.json())
            .then((data) => {
                this.setState({ products: data })
            })
            .catch(console.log)   
      }

      render () {
        return (
          <div>
            <center><h1>products in category</h1></center>
            <Products products={this.state.products} />
          </div>
        );
      }
}
export default ProdByCateContainer;