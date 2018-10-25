const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const formController = require('./controllers/formController'); // TODO: require all controllers via index

const app = express();
const config = require('./config');

// set view engine
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', '.hbs');

// static files
app.use(express.static('./public'));

// start controllers
formController(app, urlencodedParser);

// homepage route
app.get('/', function (req, res) { // TODO: add homepage
    res.render('index');
});

app.get('/gaapi', function (req, res) {
    res.render('GAapi');
});

// handle 404
app.use(function(req, res, next){
  res.status(404);
  res.render('error');
});

app.listen(config.PORT);
console.log("App is running at : " + config.PORT);