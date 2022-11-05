const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs");

const getViewURL = (url) => {
  return `views${url}.html`;
};

const app = http.createServer();
app.on("request", (req, res) => {
  console.log(`Received an incoming request...`);

  let viewUrl = getViewURL(req.url);

  fs.readFile(viewUrl, (error, data) => {
    if (error) {
      res.writeHead(httpStatus.StatusCodes.NOT_FOUND, {
        "Content-Type": "text/html",
      });
      res.write("<h1>Error page!</h1>");
      res.end();
    } else if (data) {
      res.writeHead(httpStatus.StatusCodes.OK, {
        "Content-Type": "text/html",
      });
      res.write(data);
      res.end();
    }
  });
});
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);
