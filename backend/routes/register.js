const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//registers the user into the database/application
router.post('/', async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    token: ' '
  });
  try{
    console.log(user)
    bcrypt.hash(user.password, saltRounds, function(err, hash){
      user.password = hash;
      const savedPost = user.save();
      res.json(savedPost);
    });
  }catch (err){
    res.json({message: err});
  }
console.log("finished backend")

});



module.exports = router;
