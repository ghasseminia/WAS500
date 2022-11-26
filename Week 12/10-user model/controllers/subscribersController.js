const Subscriber = require("../models/subscriber");

exports.getAllSubscribers = (req, res, next) => {
  Subscriber.find({}, (error, subscribers) => {
    if (error) next(error);
    req.data = subscribers;
    next();
  });
};

exports.getSubscriptionPage = (req, res) => {
  res.render("contact");
};

exports.saveSubscriber = (req, res) => {
  let newSubscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
  });
  newSubscriber.save((error, result) => {
    if (error) res.send(error);
    res.render("thanks");
  });
};
