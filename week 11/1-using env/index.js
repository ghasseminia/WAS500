const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.ATLAS_URI;

console.log(uri);

mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
  console.log("Ah! connected to MongoDB using Mongoose!");
});
