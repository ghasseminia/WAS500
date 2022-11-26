const mongoose = require("mongoose");

const methodOverride = require("method-override");

const Subscriber = require("./models/subscriber");

const subscribersController = require("./controllers/subscribersController");
const usersController = require("./controllers/usersController");

const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.set("port", process.env.PORT || 3000);

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"]
  })
);

require("dotenv").config();
const uri = process.env.ATLAS_URI;

console.log(uri);

mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

app.get("/users", usersController.index);
app.get("/users/new", usersController.new);
app.post("/users/create", usersController.create, usersController.redirectView);
app.get("/users/:id", usersController.show, usersController.showView);
app.delete("/users/:id/delete", usersController.delete, usersController.redirectView);

app.get(
  "/subscribers",
  subscribersController.getAllSubscribers,
  (req, res, next) => {
    console.log(req.data);
    res.render("subscribers", { subscribers: req.data });
  }
);

app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);

app.listen(app.get("port"), () => {
  console.log(`Server running @ http://localhost:${app.get("port")}`);
});
