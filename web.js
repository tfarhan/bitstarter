var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

    var filename = 'index.html';
    var buffer = fs.readFileSync(filename);
    console.log(buffer.toString());

  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
