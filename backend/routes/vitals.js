const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//registers the user into the database/application
router.get('/', async (req, res) => {
  try{
    const user = await User.findOne({'username': req.body.username});
    //console.log(user)
    user.motive = "this is my motive for creating an account"
    const updatedUser = await user.save()
  }catch(err){
    res.json({message: err});
  }
  res.send(200)
});



module.exports = router;
