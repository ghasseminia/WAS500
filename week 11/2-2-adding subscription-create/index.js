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

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

Subscriber.create(
  {
    name: "Jason",
    email: "jason@senecacollege.ca",
    zipCode: "10058",
  },
  function (error, savedDocument) {
    if (error) console.log(error);
    console.log(savedDocument);
  }
);
