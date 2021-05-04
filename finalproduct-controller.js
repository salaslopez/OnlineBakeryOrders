//Functions define in "routes.js"
var FinalProduct = require('./models/finalproduct');


//-------------Create-----------------
exports.createFinalProduct = function (req, res) {
    var newfinalproduct = new FinalProduct(req.body);
    newfinalproduct.save(function (err, finalproduct) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(finalproduct);
    });
};

//-------------Get all finalproducts-------------------
exports.getFinalProducts = function (req, res) {
    FinalProduct.find({}, function (err, finalproducts) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(finalproducts);
        console.log("finalproducts from finalproduct-controller: " + finalproducts);
    });
};

//------------Get a item with the ingredient of your chosen manually in the url----------------------
exports.getFinalProduct = function (req, res) {
    FinalProduct.findOne({ ingredient: req.params.ingredient }, function (err, finalproducts) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(finalproducts);
    });
};

//-------------Updating finalproduct based on ID -----------------
exports.updateFinalProduct = function (req, res) {
    FinalProduct.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function
        (err, finalproducts) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(finalproducts);
    });
};

//---------------Deleting finalproduct by ID-----------------------------
exports.deleteFinalProduct = function (req, res) {
    FinalProduct.findByIdAndRemove({ _id: req.params.id }, function (err, finalproducts) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(finalproducts);
    });
};

//------------------------------Find by  ID -----------------
exports.updateFinalProduct = function (req, res) {
    FinalProduct.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, function
        (err, finalproducts) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(finalproducts);
    });
};





//----------- full commands that change the database in MongoDB Atlas with an API & WebSite
//Capture all the data in DB
exports.index = async function (req, res) {
    const allproducts = await FinalProduct.find();
    res.render('index', { allproducts: allproducts });
};

exports.createProduct = function (req, res) {
    var finalproduct = new FinalProduct();
    finalproduct.section = req.body.section;
    finalproduct.mostWanted = req.body.mostwanted;
    finalproduct.item = req.body.item;
    finalproduct.ingredient = req.body.ingredient;
    finalproduct.quantity = req.body.quantity;
    finalproduct.unit = req.body.unit;
    finalproduct.save(function (err) {
        if (err) {
            console.log(err);
            return;
        }
        res.redirect('/');
    });
};

exports.loadform = function (req, res) {
    FinalProduct.findById(req.params.id, function (error, finalproduct) {
        res.render('updateproduct', {
            finalproduct: finalproduct
        });
    });
};
exports.updateProduct = function (req, res) {
    var finalproduct = {};
    finalproduct.section = req.body.section;
    finalproduct.mostWanted = req.body.mostwanted;
    finalproduct.item = req.body.item;
    finalproduct.ingredient = req.body.ingredient;
    finalproduct.quantity = req.body.quantity;
    finalproduct.unit = req.body.unit;

    console.log(finalproduct);
    var checkId = { _id: req.params.id };
    console.log(checkId);

    FinalProduct.update(checkId, finalproduct, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        res.redirect('/');
    });
};

exports.deleteProduct = function (req, res) {
    var checkId = { _id: req.params.id };
    FinalProduct.remove(checkId, function (err) {
        if (err) {
            console.log(err);
        }
        res.send('Success')
    })
};