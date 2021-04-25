const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),//Allows to use any browser
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),//Allows to connect to the DB
dotenv = require('dotenv');

//------------Server-----------
var app = express();
var port = process.env.PORT || 8000;
dotenv.config();

app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));

app.listen(port,function(err){
    console.log('Listening on port: ' + port);
});

const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('conected to db'))
    .catch((err)=> console.log(err));