const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username:{
    type: String
  },
  password: {
    type: String
  },
  token: {
    type: String
  },
  motive: {
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);
