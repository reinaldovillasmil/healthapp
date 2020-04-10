const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');

router.post('/', async (req, res) => {
  const post = new Post({
    username: req.body.username,
    password: req.body.password
  });
  try{
    console.log(post.username);
    const savedPost = await post.save();
    res.json(savedPost);
  }catch (err){
    res.json({message: err});
  }


});

//ROUTES
router.get('/', async (req, res) => {
    try{
      const posts = await Post.find();
      res.json(posts);
    }catch(err){
      res.json({message: err});
    }
});

module.exports = router;
