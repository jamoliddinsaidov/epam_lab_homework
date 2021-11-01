const mongoose = require('mongoose')
const noteSchema = require('./note')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  notes: [noteSchema],
})

module.exports = mongoose.model('User', UserSchema)
