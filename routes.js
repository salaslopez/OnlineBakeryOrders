//End points
//Functionality are in the controllers
const express = require('express'),
router = express.Router();

var finalproductCtrl = require('./finalproduct-controller');

//Show all the products in the inicial website
router.get('/', finalproductCtrl.index);

router.post('/finalproducts', finalproductCtrl.createFinalProduct);//Complement the end of the URL to create a new record
router.post('/articles/add', finalproductCtrl.createProduct);

//It is used in the index to see all the database
router.get('/finalproducts', finalproductCtrl.getFinalProducts);//Complement the end of the URL to see all the records
//This will show the items with the ingredient chosen
router.get('/finalproducts/:ingredient', finalproductCtrl.getFinalProduct);
router.get('/article/edit/:id', finalproductCtrl.loadform);
router.post('/articles/edit/:id', finalproductCtrl.updateProduct);

router.put('/finalproducts/:id', finalproductCtrl.updateFinalProduct);
router.delete('/finalproducts/:id', finalproductCtrl.deleteFinalProduct);
router.delete('/delete/:id', finalproductCtrl.deleteProduct);



module.exports = router;