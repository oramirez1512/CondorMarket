const express = require('express');
const products = require('../controllers/products');
const router = express.Router();

//Get all products
router.get('/', async(req,res)=>{
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
router.get('/product/:name',async(req, res)=>{
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
router.get('/category/:id',async(req, res)=>{
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
router.get('/:productid',async(req, res)=>{
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

/*
router.post('/',(req,res)=>{
    const {productid,name, categoryid} =req.body;    
    const query =`
        
        call productAddOrEdit(?,?,?);
    `;
    mySQLConnection.query(query,[productid, name, categoryid], (err,rows, fields)=>{
        if (!err){
            res.json({status:"Product saved"});
        }
        else{
            console.error(err);
        }
    });
});

router.put('/:id',(req,res)=>{

    const {productid} = req.params;
    console.log(productid);
    const {name, categoryid} =req.body;
    const query =`
        
    call productAddOrEdit(?,?,?);
    `;

    mySQLConnection.query(query,[productid, name, categoryid],(err,rows,fields)=>{
        if(!err){
            res.json({status:"Product updated"});    
        }else{
            console.error(err);
        }
    });
    
});
*/
module.exports = router;