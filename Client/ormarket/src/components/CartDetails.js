import React from 'react'
import ProductsContainer from '../containers/productsContainer';

const CartDetails = ({cartDetails}) => {
    return (
        <div>
            <center><h1>Cart Details</h1></center>
            {cartDetails.map((cartDetail) => (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{'product #: '+cartDetail.shoppingcartid}</h5>
                        <p className="card-text">{'price: $'+cartDetail.purchaseprice}</p>
                        <ProductsContainer productid={cartDetail.productid}></ProductsContainer>
                        <p className="card-text">{'quantity in store: '+cartDetail.quantity}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default CartDetails