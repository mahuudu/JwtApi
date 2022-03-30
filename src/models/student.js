const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    name: String,
    age: Number,
    mark : Number,
    gender: String,
    city: String,
    createAt: Date,
    updatedAt: Date,
}, {timestamps:true});


module.exports = mongoose.model('Student', Student);