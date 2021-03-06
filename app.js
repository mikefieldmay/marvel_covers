const express = require('express');
const app = module.exports = express();
const path = require('path');
const request = require('request');
require('dotenv').config();

// Using the .html extension instead of
// having to name the views as *.ejs
app.engine('.html', require('ejs').__express);

// Set the folder where the pages are kept
app.set('views', __dirname + '/views/');

// Path to the public directory
app.use("/public", express.static(path.join(__dirname, 'public')));

// This avoids having to provide the
// extension to res.render()
app.set('view engine', 'html');

// Serve the index page
app.get('/', function (req, res) {
  res.render('pages/index');
})

app.post('/search', function (req, res) {
    var searchTerm = req.body.search.toLowerCase();
    res.redirect('/' + searchTerm);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.get('https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&title=Thor&apikey=0e114cd69703e41f35be3f6c2081c779', function (req,res){
  console.log(res)
});

// error handler

app.use(function(err, req, res, next) {
// set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('pages/error');
});



const server = app.listen(3000, function () {
  const port = server.address().port;
  console.log('Marvel Covers app listening on port %s', port);
});
module.exports = server;
