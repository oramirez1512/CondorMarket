const express = require('express');
const app = express();
var cors = require('cors')


//Import routes
//const authRoute= require('./routes/auth');
const productsRoute = require('./routes/products');
const shoppingcartsRoute = require('./routes/shoppingcarts');


//settings
app.set('port', process.env.PORT ||3000);
app.use(cors());

//Middlewares
app.use(express.json());
//Route Middlewares
app.use('/api/ormarket', productsRoute,shoppingcartsRoute);

app.listen(3000, ()=>console.log('Up and running'));