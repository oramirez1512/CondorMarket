const mySQLConnection = require('../database/dataBase');
const util = require('util');
const query = util.promisify(mySQLConnection.query).bind(mySQLConnection);
const stringQuery =`
        
    call addToCart(?,?,?,?,?);
    `;

async function addToCart(prodId,cartId,quantity,cartDetId,userId)
{
    try{
        console.log('userId:'+userId);
        const res = await query(stringQuery,[prodId,cartId,quantity,cartDetId,userId]);
        console.log('res'+res);
        return "product is added";
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
        const res= query('select * from cartdetails where shoppingcartid = ?',cartid); 
        return res;
    }
    catch(err)
    {
        return err;
    }
}
module.exports ={addToCart,getCartDetail}
