// Load and link information
var http = require('http'),
    path = require('path'),
    express = require('express'),
    fs = require('fs'),
    xmlParse = require('xslt-processor').xmlParse,
    xsltProcess = require('xslt-processor').xsltProcess,
    xml2js = require('xml2js');

var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'front-end')));
router.use(express.urlencoded({extended: true}));
router.use(express.json());

// Function to read in XML file and convert it to JSON
function xmlFileToJs(filename, cb) {
  var filepath = path.normalize(path.join(__dirname, filename));
  fs.readFile(filepath, 'utf8', function(err, xmlStr) {
    if (err) throw (err);
    xml2js.parseString(xmlStr, {}, cb);
  });
}

//Function to convert JSON to XML and save it
function jsToXmlFile(filename, obj, cb) {
  var filepath = path.normalize(path.join(__dirname, filename));
  var builder = new xml2js.Builder();
  var xml = builder.buildObject(obj);
  fs.unlinkSync(filepath);
  fs.writeFile(filepath, xml, cb);
}

router.get('/', function(req, res) {

    res.render('index');

});

router.get('/get/html', function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    var xml = fs.readFileSync('OnlineBakerySuppliers.xml', 'utf8');
    var xsl = fs.readFileSync('OnlineBakerySuppliers.xsl', 'utf8');

    var doc = xmlParse(xml); //Parsing our XML file
    var stylesheet = xmlParse(xsl); //Parsing our XSL file

    var result = xsltProcess(doc, stylesheet); //This does our XSL Transformation

    res.end(result.toString()); //Send the result back to the user

});

router.post('/post/json', function (req, res) {

    function appendJSON(obj) {

        console.log(obj)

        xmlFileToJs('OnlineBakerySuppliers.xml', function (err, result) {
            if (err) throw (err);
            
            result.onlineBakeryOrders.section[obj.sec_n].finalProduct.push({'item': obj.item, 'ingredient' : obj.ingredient, 'quantity': obj.quantity});

            console.log(JSON.stringify(result, null, "  "));

            jsToXmlFile('OnlineBakerySuppliers.xml', result, function(err){
                if (err) console.log(err);
            });
        });
    };

    appendJSON(req.body);

    res.redirect('back');

});

router.post('/post/delete', function (req, res) {

    function deleteJSON(obj) {

        console.log(obj)

        xmlFileToJs('OnlineBakerySuppliers.xml', function (err, result) {
            if (err) throw (err);
            
            delete result.onlineBakeryOrders.section[obj.section].finalProduct[obj.finalProduct];

            console.log(JSON.stringify(result, null, "  "));

            jsToXmlFile('OnlineBakerySuppliers.xml', result, function(err){
                if (err) console.log(err);
            });
        });
    };

    deleteJSON(req.body);

    res.redirect('back');

});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
    var addr = server.address();
    console.log("Server listnening at", addr.address + ":" + addr.port);
});