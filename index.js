const http = require('http'),
//axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),//Allows to use any browser
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),//Allows to connect to the DB
dotenv = require('dotenv'),
path = require('path');

//------------Server-----------
var app = express();
var port = 8000;//process.env.PORT || 8000;
dotenv.config();

app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));

//Opening HTML-Online Bakery
app.use(express.static(path.resolve(__dirname, 'front-end')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port,function(err){
    console.log('Listening on port: ' + port);
});

const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('conected to db'))
    .catch((err)=> console.log(err));