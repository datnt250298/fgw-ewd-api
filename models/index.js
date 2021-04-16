const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

const User = require("./user.model")

module.exports = {
  db,
  User
};