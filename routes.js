//End points
//Functionality are in the controllers
const express = require('express'),
router = express.Router();

var finalproductCtrl = require('./finalproduct-controller');

//---------------routers to change the DB manually ------------------------------
router.post('/finalproducts', finalproductCtrl.createFinalProduct);//Complement the end of the URL to create a new record
//This will show the items with the ingredient chosen
router.get('/finalproducts/:ingredient', finalproductCtrl.getFinalProduct);
router.put('/finalproducts/:id', finalproductCtrl.updateFinalProduct);
router.delete('/finalproducts/:id', finalproductCtrl.deleteFinalProduct);
router.delete('/delete/:id', finalproductCtrl.deleteProduct);

//--------- routers to change the database dynamically trough API/MongoDB Atlas ---------------------------------
//Show all the products in the inicial website
router.get('/', finalproductCtrl.index);
//It is used in the index to see all the database
router.get('/finalproducts', finalproductCtrl.getFinalProducts);//Complement the end of the URL to see all the records
router.post('/finalproduct/add', finalproductCtrl.createProduct);
//Pass one product data to be updated
router.get('/finalproduct/edit/:id', finalproductCtrl.loadform);
router.post('/finalproduct/edit/:id', finalproductCtrl.updateProduct);



module.exports = router;