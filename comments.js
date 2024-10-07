// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var comments = require('./comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// GET /comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// POST /comments
app.post('/comments', function(req, res) {
  comments.push(req.body);
  fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
  res.json(comments);
});

// Create web server
app.listen(3000, function() {
  console.log('Web server listening on port 3000');
});