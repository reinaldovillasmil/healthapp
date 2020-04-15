const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');
const registerRoute = require('../routes/register.js');
router.use('/register', registerRoute);
const bcrypt = require('bcrypt');
const saltRounds = 10;
let authServer = require('../authServer.js')

//returns infomation on the user
// router.post('/', authServer.authenticateToken, async (req, res) => {
//     try{
//       const user = await User.find({'username': req.username});
//       res.json(user);
//     }catch(err){
//       res.json({message: err});
//     }
// });

router.post('/',  async (req, res) => {
    try{
      const user = await User.find({'username': req.body.username});
      console.log(user)
      res.json(user);
    }catch(err){
      res.json({message: err});
    }
});



module.exports = router;
