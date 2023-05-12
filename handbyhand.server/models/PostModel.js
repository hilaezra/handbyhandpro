const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    tab: String,
    title: String,
    author: String,
    content: String,
    participants: String,
    reviews: String
    
})

module.exports = postSchema;