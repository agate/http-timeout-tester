var http = require('http');
var url = require('url');
var qs = require('qs');

var server = http.createServer(function (req,res) {
  var requestAt = new Date();
  var parsedUrl = url.parse(req.url);
  var query = qs.parse(parsedUrl.query);
  var timeout = parseInt(query.timeout);
  if (timeout < 0) timeout = 0;

  setTimeout(function () {
    res.end(JSON.stringify({
      requestAt: requestAt,
      responseAt: new Date()
    }));
  }, timeout);
});

server.listen('3000');
console.log("listen on localhost:3000");
