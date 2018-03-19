const express = require('express');
const serverApp = express();
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const PORT = process.env.PORT || 5000; // necessary for huroku deployment

//Routers   

const productRouter = require('./routers/products');

serverApp.use(productRouter); //register the router with the application

serverApp.get('/', (req, res) => {
     res.send('AMAZING');
});

serverApp.listen(PORT, () => {
    console.log(`now listening on port ${PORT}` );
});