const Course = require("./models/course.js");
const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");

mongoose.connect(
    "xxx",
    { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

var testCourse, testSubscriber;

Course.create({
    title: "Product Management",
    description: "Learn how to manage products",
    zipCode: 12345,
    items: ["A-B testing"]
}).then(course => testCourse = course);


Subscriber.findOne({email:"t@example.com"}).then(
    subscriber => {
        testSubscriber = subscriber;
        console.log(testSubscriber.courses);
        testSubscriber.courses.push(testCourse);
        testSubscriber.save();
        Subscriber.populate(testSubscriber, "courses");
    }
);

Subscriber.findOne().then(
    subscriber => {
        testSubscriber = subscriber;
        console.log(testSubscriber.courses);
        testSubscriber.courses.push(testCourse);
        testSubscriber.save();
        Subscriber.populate(testSubscriber, "courses");
    }
);