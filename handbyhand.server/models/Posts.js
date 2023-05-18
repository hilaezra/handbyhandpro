const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({

    author: { type: Schema.Types.ObjectId, ref: 'Users', required: true},
    eventType: {type: String, required: true},
    eventTitle: {type: String, required: true},
    content: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    participants: [{type: Schema.Types.ObjectId, ref: 'Users', required: false}],
    reviews: [{
          user: {type: Schema.Types.ObjectId, ref: 'User', required: false},
          text: {type: String, required: false}}]
})

module.exports = mongoose.model('Posts', postSchema);