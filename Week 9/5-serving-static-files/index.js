const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs");

const routeResponseMap = {
  "/": "views/index.html",
  "/info": "views/info.html",
  "/error": "<h1>error</h1>",
};

const app = http.createServer();
app.on("request", (req, res) => {
  console.log(`Received an incoming request...`);

  res.writeHead(httpStatus.StatusCodes.OK, {
    "Content-Type": "text/html",
  });

  if (routeResponseMap[req.url]) {
    fs.readFile(routeResponseMap[req.url], (error, data) => {
      res.write(data);
      res.end();
    });
  } else {
    res.end(routeResponseMap["/error"]);
  }
});
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);
