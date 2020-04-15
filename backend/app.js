const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const userRoute = require('./routes/user');

app.use(express.json())
app.use('/user', userRoute);

mongoose.connect('mongodb+srv://reinaldovillasmil:Myspace3!@cluster0-ms9pk.mongodb.net/test?retryWrites=true&w=majority',
 { useNewUrlParser: true , useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to db!")
});



app.listen(3000);
