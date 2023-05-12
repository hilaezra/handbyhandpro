const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String, required: true},
    lastname: {
        type: String, required: true},
    email: {
        type: String, equired: true},
    facebookuser: {
        type: String, required: true},
    username: {
        type: String, required: true},
    password: {
        type: String, required: true},
    refreshToken: {
        type: String},
    date:{
        type: Date, default:Date.now}
});

module.exports = mongoose.model('Users', userSchema);