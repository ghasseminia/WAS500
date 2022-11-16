const port = 3000,
  express = require("express"),
  app = express();

// app.use((req, res, next) => {
//   console.log(`request made to: ${req.url} at ${new Date().getTime()}`);
//   next();
// });



app.get("/items/:s", (req, res) => {
  let veg = req.params.s;
  res.send(`This is the page for ${veg}`);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});