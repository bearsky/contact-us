const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const formController = require('./controllers/formController'); // TODO: require all controllers via index

const app = express();

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

app.listen(3000);
console.log("App is running at http://localhost:3000");