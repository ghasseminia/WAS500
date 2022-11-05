const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");

const app = http.createServer();
app.on("request", (req, res) => {
  console.log(`Received an incoming request...`);
  res.writeHead(httpStatus.StatusCodes.OK, {
    "Content-Type": "text/html",
  });
  let responseMessage = `<h1>This will show on screen!</h1>`;
  res.end(responseMessage);
  console.log(`Sent a response: ${responseMessage}`);
});
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);
