const express = require('express');
const app = express();


//Import routes
//const authRoute= require('./routes/auth');
const productsRoute = require('./routes/products');
const shoppingcartsRoute = require('./routes/shoppingcarts');


//settings
app.set('port', process.env.PORT ||3000);

//Middlewares
app.use(express.json());
//Route Middlewares
app.use('/api/condormarket', productsRoute,shoppingcartsRoute);

app.listen(3000, ()=>console.log('Up and running'));