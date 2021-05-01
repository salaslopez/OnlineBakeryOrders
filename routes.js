//End points
//Functionality are in the controllers
const express = require('express'),
router = express.Router();

var finalproductCtrl = require('./finalproduct-controller');

router.post('/finalproducts', finalproductCtrl.createFinalProduct);//Complement the end of the URL to create a new record
router.get('/finalproducts', finalproductCtrl.getFinalProducts);//Complement the end of the URL to see all the records
//This will show the items with the ingredient chosen
router.get('/finalproducts/:ingredient', finalproductCtrl.getFinalProduct);
//------------Get a item with the ingredient of your chosen in the html----------------------
router.get('/finalproductsby', function(req, res){
    
    // FinalProduct.findOne({ingredient: req.body}, function(err, finalproducts){
    //     if(err){
    //         res.status(400).json(err);
    //     }
        
        //res.json(finalproducts);
       // });
        console.log('Got body:', req.body);
        res.sendStatus(200);
    
});

router.put('/finalproducts/:id', finalproductCtrl.updateFinalProduct);
router.delete('/finalproducts/:id', finalproductCtrl.deleteFinalProduct);
//show what was searched in the html
router.get('/searching',finalproductCtrl.showresults);

module.exports = router;