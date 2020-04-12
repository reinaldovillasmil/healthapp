const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/', async (req, res) => {
  const userFound = await User.find({'username': req.body.username});
  if(userFound.length <= 0){
    return res.status(400).send('Cannot find user')
  }
  bcrypt.compare(req.body.password, userFound[0].password, function(err, res) {
  if (err){
    // handle error
  }
  if (res){
    // Send JWT
    console.log("my boy we are in and validated")
  } else {
    // response is OutgoingMessage object that server response http request
    console.log("Incorrect password or username. Please try again")
  }
});

});

module.exports = router;
