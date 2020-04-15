require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const server = express();
const bodyParser = require('body-parser');
const userRoute = require('./routes/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

server.use(express.json())

mongoose.connect('mongodb+srv://reinaldovillasmil:Myspace3!@cluster0-ms9pk.mongodb.net/test?retryWrites=true&w=majority',
 { useNewUrlParser: true , useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to db!")
});

server.get('/', async (req, res) => {
  console.log("dee")
});


server.post('/login', async (req, res) =>{
  const userFound = await User.find({'username': req.body.username});
  if(userFound.length <= 0){
    return res.status(400).send('Cannot find user')
  }
  const match = await bcrypt.compare(req.body.password, userFound[0].password)
  if(match){
    const token = await jwt.sign(userFound[0].username, process.env.ACCESS_TOKEN_SECRET)
     userFound[0].token = token
     const newPost = await userFound[0].save()
     res.json(token)
     res.sendStatus(200).send(token)

  }
  else{
      console.log("Incorrect password or username. Please try again")
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


module.exports = {
  authenticateToken
}


server.listen(4000);
