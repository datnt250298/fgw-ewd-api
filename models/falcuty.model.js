const mongoose = require('mongoose')
const Schema = mongoose.Schema
const facultySchema = new Schema({
    facultyName: {type:String},
    topicList: [{type:mongoose.Types.ObjectId}],
    topicList: [{type:mongoose.Types.ObjectId}]
})

const User = mongoose.model("faculties", facultySchema);
module.exports = User;