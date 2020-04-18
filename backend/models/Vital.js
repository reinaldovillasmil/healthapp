const mongoose = require('mongoose');

const VitalSchema = mongoose.Schema({
  userID:{
    type: String
  },
  weight: {
    type: String
  },
  pulse: {
    type: String
  },
  heartrate: {
    type: String
  }
});

module.exports = mongoose.model('Vital', VitalSchema);
