const User = require("./models/user");
const Course = require("./models/course.js");
const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");

mongoose.connect(
    "xxx",
    { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
var testUser;
User.create({
    name: {
        first: "user1",
        last: "user1 lastnam"
    },
    email: "user1@example.com",
    password: "pass123"
})
    .then(user => testUser = user)
    .catch(error => console.log(error.message));