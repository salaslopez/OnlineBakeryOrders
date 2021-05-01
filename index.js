const http = require('http'),
//axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),//Allows to use any browser
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),//Allows to connect to the DB
dotenv = require('dotenv'),
path = require('path'),
request = require('request');
var FinalProduct = require('./models/finalproduct');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('tiny'));


app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.static('views/index'));//Opening HTML-Online Bakery
//app.set('views',path.resolve(__dirname, 'views'));

app.get('/', async function(req, res) {
    console.log("HELLO FROM INDEX");
    const allproducts = await FinalProduct.find();
    res.render('index',{allproducts: allproducts});
    console.log("allproducts: " + allproducts);
});




app.get('/searching', function (req, res) {
    
    var val = req.query.search;
    console.log(val);
res.send("WHEEE");
    // var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20craigslist.search" +
    //     "%20where%20location%3D%22sfbay%22%20and%20type%3D%22jjj%22%20and%20query%3D%22" + val + "%22&format=" +
    //     "json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    // console.log(url);

    // request(url, function (err, resp, body) {
    //  console.log(body);
    //      this.body = JSON.parse(body);
        
    //     // logic used to compare search results with the input from user
    //     if (!body.query.results.RDF.item) {
    //         craig = "No results found. Try again.";
    //     } else {
    //         craig = body.query.results.RDF.item[0]['about'];
    //     }
    //     // pass back the results to client side
    //     res.send(craig);
    //});

});

//------------Server-----------

var port = process.env.PORT || 8000;
dotenv.config();



app.listen(port,function(err){
    console.log('Listening on port: ' + port);
});

const dbURI = process.env.DB_URL;
app.use(require('./routes'));

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('<<<<<<<<< ZARAY SAYS: CONECTED TO DB >>>>>>>'))
    .catch((err)=> console.log(err));