// Create web server
// Run: node comments.js
// Test: curl http://localhost:3000/comments

var http = require('http');
var comments = require('./comments');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  comments.forEach(function(comment) {
    res.write(comment.name + ' said: ' + comment.message + '\n');
  });

  res.end();
});

server.listen(3000, 'localhost', function() {
  console.log('Listening on port 3000');
});