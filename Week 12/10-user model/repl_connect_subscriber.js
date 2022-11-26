const User = require("./models/user");
const Course = require("./models/course.js");
const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");

var targetSubscriber;
Subscriber.findOne({
    email: testUser.email
}).then(subscriber => targetSubscriber = subscriber);