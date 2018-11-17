const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/ng-x-rocket'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/ng-x-rocket/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);
