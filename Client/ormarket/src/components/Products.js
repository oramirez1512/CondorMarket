import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ProductDetails from './productDetails'

const handleAdd =require('../actions/index');

const Products = ({products}) => {
    return (
        <div>
            {products.map((product) => (
                <Card>
                    <CardActionArea>                    
                        <ProductDetails
                        name ={product.name}
                        description={product.description}
                        quantity ={product.quantity+"in store"}
                        price ={product.price}
                         urlimage ={product.urlimage}/>
                        <CardActions>
                            <Button size="small" color="primary"
                                onClick={() => 
                                    {handleAdd.addToCart(product.productid)}} 
                            >+</Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    )
};

export default Products