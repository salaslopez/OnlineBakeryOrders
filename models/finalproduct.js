//Structure of the data
var mongoose = require('mongoose');

var finalproductSchema = new mongoose.Schema({
    //<The "onlinebakery" is divided in sections
    section: {
        type: String,
        enum:['Cakes', 'Small Cakes', 'Pastry', 'Breads']
    },
    //The "mostwanted" is an optional attribute, said if the product is a top seller
    mostWanted: Boolean,
    item: {
        type: String, 
        unique: true},
    ingredient: String,
    //The "quantity" has the attribute which specify the unit of measure for that amount
    quantity: Number,
    unit: {
        type: String,
        enum: ['pcs', 'grs', 'ml']
    },
    
},
);

module.exports = mongoose.model('FinalProduct', finalproductSchema);