const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  bio: {
    type: String
  },
  skillsOffered: {
    type: [String],
    required: true
  },
  skillsWanted: {
    type: [String],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
