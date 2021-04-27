//End points
//Functionality are in the controllers
const express = require('express'),
router = express.Router();

var finalproductCtrl = require('./finalproduct-controller');

router.post('/finalproducts', finalproductCtrl.createFinalProduct);//Complement the end of the URL to create a new record
router.get('/finalproducts', finalproductCtrl.getFinalProducts);//Complement the end of the URL to see all the records
router.get('/finalproducts/:id', finalproductCtrl.getFinalProduct);//Complement the end of the URL to see one record by ID
router.put('/finalproducts/:id', finalproductCtrl.updateFinalProduct);
router.delete('/finalproducts/:id', finalproductCtrl.deleteFinalProduct);

module.exports = router;