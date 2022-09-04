var express = require('express');
var app = express();
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

// use res.render to load up an ejs view file

// home page
app.get('/', function(req, res) {
  res.render('pages/homepage');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// solutions page
app.get('/solutions', function(req, res) {
  res.render('pages/solutions');
});

// products page
app.get('/products', function(req, res) {
  res.render('pages/products');
});

// finance page
app.get('/finance', function(req, res) {
  res.render('pages/finance');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}!`)
});