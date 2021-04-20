const mongoose = require('mongoose')
const Schema = mongoose.Schema
const facultySchema = new Schema({
    facultyName: {type:String},
    topicList: [{type:mongoose.Types.ObjectId}],
    topicList: [{type:mongoose.Types.ObjectId}]
})

const Faculty = mongoose.model("faculties", facultySchema);
module.exports = Faculty;