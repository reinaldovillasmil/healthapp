const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');
const logInRoute = require('../routes/login.js');
const registerRoute = require('../routes/register.js');
const vitalRoute = require('../routes/vitals.js');
router.use('/vitals', vitalRoute);
router.use('/login', logInRoute);
router.use('/register', registerRoute);
const bcrypt = require('bcrypt');
const saltRounds = 10;

//returns infomation on the user
router.post('/', async (req, res) => {
    try{
      const user = await User.find({'username': req.body.username});
      res.json(user);
    }catch(err){
      res.json({message: err});
    }
});




function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) {
    return res.sendStatus(401)
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    req.username = user
    next()
  })
}

module.exports = router;
