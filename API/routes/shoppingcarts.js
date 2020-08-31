const express = require('express');
const shoppingcarts = require('../controllers/shoppingcarts');

const router = express.Router();

router.post('/shoppingcart/',async(req,res)=>{
    const {prodId,cartId,quantity,cartDetId,userId} =req.body;
    console.log('userId:'+userId);
    try{
        const result= await shoppingcarts.addToCart(prodId,cartId,quantity,cartDetId,userId);
        res.json({status:result})
    }
    catch(err)
    {

    }
});

router.get('/shoppingcart/:cartid', async(req,res)=>{
    const {cartid} = req.params;
    try{
    const rows= await shoppingcarts.getCartDetail(cartid);
    res.json(rows);
    }
    catch (err)
    {
        console.error(err);
    }
});

module.exports = router;