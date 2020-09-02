
const mySQLConnection = require('../database/dataBase');
const util = require('util');
const query = util.promisify(mySQLConnection.query).bind(mySQLConnection);

const stringQuery ='select products.*, productdetails.* '+
'from products,productdetails where productdetails.productid = products.productid';
//Get all products
async function products() {  
    try
    {
        console.log('start');
        const result =await query(stringQuery);
        console.log('rows');
        return result;        
    }
    catch (err) {
        console.error(err);
        }
        console.log('End');  
    
}

//Get product given a column and value
async function prodsByColvalue(column,value) {  
    try
    {        
        const result =await query(stringQuery+' and products.'+column+'= ?', value);
        return result;        
    }
    catch (err) {
        console.error(err);
        } 
    
}

async function getCategories()
{
    try
    {
        const res=await query('select * from categories'); 
        return res;
    }
    catch(err)
    {
        return err;
    }
}

async function getCategory(categoryid)
{
    try
    {
        const res=await query('select * from categories where categoryid =?',categoryid); 
        return res;
    }
    catch(err)
    {
        return err;
    }
}
module.exports = {products,prodsByColvalue,getCategories,getCategory}