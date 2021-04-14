const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    userName: {type: String, require: true},
    email: {type:String, require: true, trim: true},
    password: {type: String, require: true},
    role: {type: String, default: "Student"},
    facultyId: {type: mongoose.Types.ObjectId, ref: "falcuties" }
})

const User = mongoose.model("users", userSchema);
module.exports = User;