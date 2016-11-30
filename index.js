var http = require('http');
var url = require('url');
var qs = require('qs');

var MAX_TIME_OUT = 1000 * 60 * 60;

var server = http.createServer(function (req,res) {
  var requestAt = new Date();
  var parsedUrl = url.parse(req.url);
  var query = qs.parse(parsedUrl.query);
  var timeout = parseInt(query.timeout);
  if (timeout < 0) timeout = 0;

  setTimeout(function () {
    res.end(JSON.stringify({
      requestAt: requestAt,
      responseAt: new Date(),
      info: "MAX TIMEOUT IS " + MAX_TIME_OUT + " MSECS."
    }));
  }, timeout);
});

server.listen('3000');
console.log("listen on localhost:3000");

server.setTimeout(MAX_TIME_OUT, function () {
  console.log("HIT TIMEOUT")
})
