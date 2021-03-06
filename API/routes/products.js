const express = require('express');
const products = require('../controllers/products');
const router = express.Router();

//Get all products
router.get('/product/', async(req,res)=>{
    try{
        const rows= await products.products();
        res.json(rows);
    }
    catch (err)
    {
        console.error(err);
    }
});
///Get products given a name
router.get('/product/name/:name',async(req, res)=>{
    const {name} = req.params;
    console.log(name)
    try{
        const rows= await products.prodsByColvalue('name',name);
        res.json(rows);
    }
    catch(err)
    {
        console.error(err);
    }  
});

///Get products given a category
router.get('/product/category/:id',async(req, res)=>{
    const {id} = req.params;
    console.log(id)
    try{
        const rows= await products.prodsByColvalue('categoryid',id);
        res.json(rows);
    }
    catch(err)
    {
        console.error(err);
    }      
});


///Get product given an id
router.get('/product/:productid',async(req, res)=>{
    const {productid} = req.params;
    console.log('id: '+productid)
    try{
        const rows= await products.prodsByColvalue('productid',productid);
        res.json(rows);
    }
    catch(err)
    {
        console.error(err);
    }     
});

//Get all categories
router.get('/categories/', async(req,res)=>{
    try{
        const rows= await products.getCategories();
        res.json(rows);
    }
    catch (err)
    {
        console.error(err);
    }
});

///Get products given an id
router.get('/categories/:id',async(req, res)=>{
    const {id} = req.params;
    try{
        const rows= await products.getCategory(id);
        res.json(rows);
    }
    catch(err)
    {
        console.error(err);
    }  
});

module.exports = router;