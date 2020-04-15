const express = require('express');
const router = express.Router();
const User = require('../models/User');
const logInRoute = require('../routes/login.js');
const registerRoute = require('../routes/register.js');
router.use('/login', logInRoute);
router.use('/register', registerRoute);
const bcrypt = require('bcrypt');
const saltRounds = 10;

//returns infomation on the user
router.post('/', async (req, res) => {
    try{
      const user = await User.find({'username': req.body.username});
      res.json(user);
      console.log(user)
    }catch(err){
      res.json({message: err});
    }
});

module.exports = router;
