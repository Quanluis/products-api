const express = require('express');
const router = express.Router();
const mockProducts = require('../mocks/products');

const Product = require('../models/product');

const productArrToObj = (arrayOfProducts) => {
    // create an accumulator obj 
    const accumulator = {};
    // for each product in array of products 
    arrayOfProducts.forEach(product => {
        const id = product._id;
        const copy = {...product._doc}
        delete copy._id;
        accumulator[id] = copy;
        
    });
       //grab the id 

       //delete the _id internal to the object 
       // set the id val in the accumulato obj equal to product  
    //return accumulator 
    return accumulator;


}

router.get('/products', (req, res) => {
    Product.find()
           .exec()
           .then(allProducts => {
            res.status(200).json({
                products: productArrToObj(allProducts)
            });

           })
           .catch(err => {
               res.status(500).json({
                   msg: 'ITS BROKEN AGAIN!'
               })
           })
   
});
router.get('/products/:id',(req, res) => {
    const {id} = req.params;
   
   Product.findById(id)
           .exec()
           .then(selectedProduct => {
                const selectedId = selectedProduct._id;
                const copy = {...selectedProduct._doc};
                delete copy._id
            res.status(200).json({
                products: {
                    [selectedId]: copy
                }
            })
           })
           .catch(err => {
               res.status(500).json({
                   msg: 'Do not look behind you'
               })

           })
    
})
//post means create
router.post('/products', (req, res) => {
    const product = new Product({
        name: 'Something new',
        price: 1000,
        imgSRC: 'https://via.placeholder.com/250x250'

    });
    product.save()
           .then(response => {
            res.status(201).json({
                msg: 'created product!'
                })
                
           })
            .catch(err => {
                res.status(500).json({
                    msg: 'Your stuff done broke.'
                });
            });
    
 
})

// Update (Put)

router.put('/products/:id', (req, red) => {
    res.send('updating now')
    
});


//delete (DELETE)

router.delete('/products/:id', (req, red) => {
    res.send('Deleting something right now')
});


module.exports = router; // like export default 