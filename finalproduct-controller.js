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

// Show the result of the search in the html
exports.showresults = function (req, res) {
    
    var val = req.query.search;//Name over the button
    console.log("val: " + val);
    res.send(val);//Should go the Result of the search
    // var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20craigslist.search" +
    //     "%20where%20location%3D%22sfbay%22%20and%20type%3D%22jjj%22%20and%20query%3D%22" + val + "%22&format=" +
    //     "json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    // console.log(url);

    // request(url, function (err, resp, body) {
    //  console.log(body);
    //      body = JSON.parse(body);
        
    //     // logic used to compare search results with the input from user
    //     if (!body.query.results.RDF.item) {
    //         craig = "No results found. Try again.";
    //     } else {
    //         craig = body.query.results.RDF.item[0]['about'];
    //     }
    //     // pass back the results to client side
    //     res.send(craig);
    //});

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