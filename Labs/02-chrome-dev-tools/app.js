const http = require("http");

http
  .createServer(function (req, res) {
    console.log("Incoming request to " + req.url);

    res.writeHead(200, { "Content-Type": "text/plain" });
    setTimeout(function () {
      res.end("This is a slow API call");
    }, 2000);
  })
  .listen(1337, "127.0.0.1");

console.log("Server running at http://127.0.0.1:1337/");
