import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import ProductDetails from './productDetails';
import AddButton from './AddButton'

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
                            <AddButton productid={product.productid}></AddButton>
                        </CardActions>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    )
};

export default Products