const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  email: String,
  password: String,
  phoneNumber: Number,
  designation: String,
  address: String,
  interest: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
