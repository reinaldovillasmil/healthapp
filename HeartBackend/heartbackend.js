const express = require('express');
const mongoose = require('mongoose');
const postRoute = require('./routes/posts');
const app = express();
const bodyParser = require('body-parser');



//app.use(bodyParser.json())
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use('/posts', postRoute);



mongoose.connect('mongodb+srv://Reinaldo:Myspace3!@heart-qu7rq.mongodb.net/test?retryWrites=true&w=majority',
 { useNewUrlParser: true },() =>
  console.log("connect to db")
);


app.listen(3000);
