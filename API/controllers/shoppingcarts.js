const mySQLConnection = require('../database/dataBase');
const util = require('util');
const query = util.promisify(mySQLConnection.query).bind(mySQLConnection);
const stringQueryAdd =`
        
    call addToCart(?,?,?,?,?);
    `;
const stringQueryRemove =`
        
    call removeFromCart(?);
    `;

async function addToCart(prodId,cartId,quantity,cartDetId,userId)
{
    try{
        console.log('userId:'+userId);
        const res = await query(stringQueryAdd,[prodId,cartId,quantity,cartDetId,userId]);
        console.log('res'+res);
        return "product is added";
    }catch(err)
    {
        console.log(err);
        return "error"+err;
    }
}

async function removeFromCart(cartId)
{
    try{
        const res = await query(stringQueryRemove,cartId);
        console.log('res'+res);
        return "product is removed";
    }catch(err)
    {
        console.log(err);
        return "error"+err;
    }
}

async function getCartDetail(cartid)
{
    try
    {
        const res=await query('select cartdetails.*, products.name, productDetails.urlimage'
        +' from cartdetails, products, productDetails '+
        'where cartdetails.stayincart = 1 '+
        'and productDetails.productid = products.productid '+
        'and products.productid = cartdetails.productid '+
        'and  cartdetails.shoppingcartid = ?  ',cartid); 
        return res;
    }
    catch(err)
    {
        return err;
    }
}
module.exports ={addToCart,getCartDetail,removeFromCart}
