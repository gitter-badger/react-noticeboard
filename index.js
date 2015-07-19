/*jslint node: true */
"use strict";

// Declare variables used
var app, express, mongoose, port;

// Define values
express = require("express");
app = express();
mongoose = require('mongoose');
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/react-noticeboard';
port = process.env.PORT || 5000;

// Connect to the database
mongoose.connect(uristring);

// Create a model for the notices
var NoticeSchema = mongoose.Schema({
  text: {
    type: String,
    match: /^(\w+)/
  }
});
var Notice = mongoose.model('Notice', NoticeSchema);

// Setup templating
var ReactEngine = require('express-react-engine');
app.set('views', __dirname + '/components');
app.engine('jsx', ReactEngine({wrapper: 'html.jsx'}));

// Define routes

// Main route
app.get('/', function (req, res) {
  Notice.find(function (err, notices) {
    if (err) {
      console.log('Error: ' + err);
    } else {
      res.render('index.jsx', notices);
    }
  });
});

// Notices route
app.get('/notices', function (req, res) {
  Notice.find(function (err, notices) {
    if (err) {
      console.log('Error: ' + err);
    } else {
      res.json(notices);
    }
  });
});

// Serve static files
app.use(express.static(__dirname + '/public'));

// Listen
app.listen(port);
console.log("Listening on port " + port);
