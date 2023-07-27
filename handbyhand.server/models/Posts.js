const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({

    authorID: { type: Schema.Types.ObjectId, ref: 'Users', required: true},
    authorName: { type: String, ref: 'Users', required: true},
    eventType: {type: String, required: true},
    eventTitle: {type: String, required: true},
    content: {type: String, required: true},
    startDate: {type: Date, required: true},
    startTime: {type:String,required: true},
    endDate: {type: Date, required: true},
    endTime: {type:String,required: true},
    participants: [{type: Schema.Types.ObjectId, ref: 'Users', required: false}],
    reviews: [{
          user: {type: Schema.Types.ObjectId, ref: 'User', required: false},
          text: {type: String, required: false}}]
})

module.exports = mongoose.model('Posts', postSchema);