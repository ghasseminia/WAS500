const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");

const routeResponseMap = {
  "/info": "<h1>info</h1>",
  "/contacts": "<h1>contacts</h1>",
  "/about": "<h1>about</h1>",
  "/hello": "<h1>hello</h1>",
  "/error": "<h1>error</h1>",
};

const app = http.createServer();
app.on("request", (req, res) => {
  console.log(`Received an incoming request...`);

  res.writeHead(httpStatus.StatusCodes.OK, {
    "Content-Type": "text/html",
  });

  if (routeResponseMap[req.url]) {
    res.end(routeResponseMap[req.url]);
  } else {
    res.end(routeResponseMap["/error"]);
  }
});
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);

