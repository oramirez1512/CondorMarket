import React from 'react'

const Products = ({products}) => {
    return (
        <div>
            {products.map((product) => (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{product.description}</h6>
                        <p className="card-text">{'price: $'+product.price}</p>
                        <p className="card-text">{'quantity in store: '+product.quantity}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Products