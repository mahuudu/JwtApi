const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const City = new Schema({
  name: String,
  code: String,
});


module.exports = mongoose.model('City', City);