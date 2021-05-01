//Functions define in "routes.js"
var FinalProduct = require('./models/finalproduct')
//-------------Create-----------------
exports.createFinalProduct = function(req, res){
    var newfinalproduct = new FinalProduct(req.body);
    newfinalproduct.save(function(err, finalproduct){
        if(err){
            res.status(400).json(err);
        }
        res.json(finalproduct);
    });
};

//-------------Get all finalproducts-------------------
exports.getFinalProducts = function(req, res){
    FinalProduct.find({}, function(err, finalproducts){
        if(err){
            res.status(400).json(err);
        }
        res.json(finalproducts);
        console.log("finalproducts from finalproduct-controller: " + finalproducts);
    });
};

//------------Get a item with the ingredient of your chosen in the url----------------------
exports.getFinalProduct = function(req, res){
    FinalProduct.findOne({ingredient: req.params.ingredient}, function(err, finalproducts){
        if(err){
            res.status(400).json(err);
        }
        res.json(finalproducts);
    });
};


//-------------Updating finalproduct based on ID -----------------
exports.updateFinalProduct = function(req, res){
    FinalProduct.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function
        (err, finalproducts){
        if(err){
            res.status(400).json(err);
        }
        res.json(finalproducts);
    });
};

//---------------Deleting finalproduct by ID-----------------------------
exports.deleteFinalProduct = function(req, res){
    FinalProduct.findByIdAndRemove({_id: req.params.id}, function(err, finalproducts){
        if(err){
            res.status(400).json(err);
        }
        res.json(finalproducts);
    });
};

//------------------------------Find by  ID -----------------
exports.updateFinalProduct = function(req, res){
    FinalProduct.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function
        (err, finalproducts){
        if(err){
            res.status(400).json(err);
        }
        res.json(finalproducts);
    });
};