const mongoose = require('mongoose')
const Schema = mongoose.Schema
const topicSchema = new Schema({
    facultyName: {type:String},
    topicList: [{type:mongoose.Types.ObjectId}],
    topicList: [{type:mongoose.Types.ObjectId}]
})

const Topic = mongoose.model("topics", topicSchema);
module.exports = Topic;