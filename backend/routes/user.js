const express = require('express');
const router = express.Router();
const User = require('../models/User');
const logInRoute = require('../routes/login.js');
router.use('/login', logInRoute);
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/', async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  try{
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

router.get('/', async (req, res) => {
    try{
      const posts = await User.find();
      res.json(posts);
    }catch(err){
      res.json({message: err});
    }
});

module.exports = router;
