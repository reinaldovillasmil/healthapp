require('dotenv').config()
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;


//logins user into the application, also sends the token for authorization purposes.
router.post('/', async (req, res) =>{
  const userFound = await User.find({'username': req.body.username});
  if(userFound.length <= 0){
    return res.status(400).send('Cannot find user')
  }
  const match = await bcrypt.compare(req.body.password, userFound[0].password)
  if(match){
    const token = jwt.sign(userFound[0].username, process.env.ACCESS_TOKEN_SECRET)
     userFound[0].token = token
     const newPost = await userFound[0].save()
     res.json(token)
     res.sendStatus(200).send(token)

  }
  else{
      console.log("Incorrect password or username. Please try again")
  }
});



module.exports = router;
