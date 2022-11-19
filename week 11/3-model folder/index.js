const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
require("dotenv").config();
const uri = process.env.ATLAS_URI;

console.log(uri);

mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

var myQuery = Subscriber.findOne({
  name: "Mo Salah",
}).where("email", /seneca/);

// var myQuery = Subscriber.findOne({
//   name: /Mo/,
// }).where("email", /seneca/);

myQuery.exec((error, data) => {
  if (data) console.log(data.name + ":" + data.email);
});
