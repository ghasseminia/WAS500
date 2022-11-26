const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");

mongoose.connect(
    "xxx",
    { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
Subscriber.create({
    name: "Mr. N",
    email: "newemail@example.com",
    zipCode: "12345"
})
    .then(subscriber => console.log(subscriber))
    .catch(error => console.log(error.message));