// import express for robust tooling for http servers
var express = require('express');
var app = express();
// import express handlebars for html page formatting and serving
var exphbs = require('express-handlebars');
// set port for application to work on any server
var PORT = process.env.PORT || 5000;
// import orm to be used in calls
// var orm = require('./config/orm.js');

var bodyParser = require('body-parser');

// set up middleware for static content
app.use(express.static('public'));

// set up express app to handle data parsing
// app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

// set up default layour for handlebars
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// import routing controllers
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// start app listening
app.listen(PORT, function(){
    // display that port is monitored
    console.log('Serving listening on http://localhost: ' + PORT);
});

console.log('5');
