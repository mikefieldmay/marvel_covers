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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
