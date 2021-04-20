const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

const User = require("./user.model")
const Faculty = require("./faculty.model")
const Topic = require("./topic.model")

module.exports = {
  db,
  User,
  Faculty,
  Topic
};