const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://dbuser:5bZ4MViy3T3Tc1xX@was500.rornrws.mongodb.net/?retryWrites=true&w=majority",
  { useUnifiedTopology: true }
);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Ah! connected to MongoDB using Mongoose!!");
});
