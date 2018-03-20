const express = require('express');
const serverApp = express();
const mongoose = require('mongoose');

require('dotenv').config();

//middleware imports

const bodyParser = require('body-parser')

const logger = require('./middlewares/logger');

const notfound = require('./middlewares/404')

const serverError = require('./middlewares/serverError')

mongoose.connect(process.env.MONGO_URI);

const PORT = process.env.PORT || 5000; // necessary for huroku deployment

//Routers   

const productRouter = require('./routers/products');

serverApp.use(bodyParser.json())
serverApp.use(bodyParser.urlencoded({extended: true}));
serverApp.use(logger);

serverApp.use(productRouter); //register the router with the application




serverApp.get('/', (req, res) => {
     res.send('AMAZING');
});

serverApp.use(notfound);

serverApp.use(serverError);


serverApp.listen(PORT, () => {
    console.log(`now listening on port ${PORT}` );
});