import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ProductDetails from './productDetails'
import Typography from '@material-ui/core/Typography';
  
const handleRemove =require('../actions/index');
function removeFromCart(cardName) {
    if (document.getElementById(cardName)) {
        document.getElementById(cardName).style.width = "0";
        document.getElementById(cardName).style.height = "0";
    }
    handleRemove.removeAproduct(cardName);
  };
const CartDetails = ({cartDetails}) => {
    return (
        <div>
            <Typography>
                <center><h1>Cart details</h1></center>
            </Typography>
            {cartDetails.map((cartDetail) => (
               <Card id={cartDetail.cartdetailid}>
                    <CardActionArea>                    
                        <ProductDetails
                        name ={cartDetail.name}
                        description={""}
                        quantity ={cartDetail.quantity}
                        price ={cartDetail.purchaseprice}
                        urlimage ={cartDetail.urlimage}/>
                        <CardActions>
                            <Button size="small" color="primary"
                                onClick={() => 
                                    {removeFromCart(cartDetail.cartdetailid)}} 
                                >Remove
                            </Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
            ))}        
        </div>
    )
};

export default CartDetails