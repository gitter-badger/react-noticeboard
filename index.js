/*jslint node: true */
"use strict";

// Declare variables used
var app, express, mongoose, NoticeSchema, Notice, port, reactEngine, uristring;

// Define values
express = require("express");
app = express();
mongoose = require('mongoose');
uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/react-noticeboard';
port = process.env.PORT || 5000;

// Connect to the database
mongoose.connect(uristring);

// Create a model for the notices
NoticeSchema = mongoose.Schema({
  text: {
    type: String,
    match: /^(\w+)/
  }
});
Notice = mongoose.model('Notice', NoticeSchema);

// Setup templating
reactEngine = require('express-react-engine');
app.set('views', __dirname + '/components');
app.engine('jsx', reactEngine({wrapper: 'html.jsx'}));

// Define routes

// Main route
app.get('/', function (req, res) {
  Notice.find(function (err, notices) {
    if (err) {
      console.log('Error: ' + err);
    } else {
      res.render('index.jsx', { notices: notices });
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
