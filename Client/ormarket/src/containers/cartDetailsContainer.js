import React, { Component } from 'react';
import CartDetails from '../components/CartDetails'

class CartDetailsContainer extends Component {

    state = {
        cartDetails: []
    };
    
    componentDidMount() {
        const {shoppingcartid} = this.props;
        fetch('http://localhost:3000/api/ormarket/shoppingcart/'+shoppingcartid)
            .then(res => res.json())
            .then((data) => {
                this.setState({ cartDetails: data })
            })
            .catch(console.log)   
      }

      render () {
        return (
          <CartDetails cartDetails={this.state.cartDetails} />
        );
      }

}
export default CartDetailsContainer;