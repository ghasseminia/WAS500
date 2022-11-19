const mongoose = require("mongoose");

require("dotenv").config();
const uri = process.env.ATLAS_URI;

console.log(uri);

mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

const subscriberSchema = mongoose.Schema({
  name: String,
  email: String,
  zipCode: Number,
});

const Subscriber = mongoose.model("Subscribers", subscriberSchema);
var subscriber1 = new Subscriber({
  name: "Joe Doe",
  email: "Joe@senecacollege.ca",
  zipCode: "10028",
});
subscriber1.save((error, savedDocument) => {
  if (error) console.log(error);
  console.log(savedDocument);
});
