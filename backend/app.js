const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");

const app = express();

mongoose.connect(
    "mongodb+srv://Mickey:74rY3W0DJmaTQ5iZ@crates1-llbep.mongodb.net/node-angular?retryWrites=true&w=majority"
  )
  .then( ()=> {
    console.log("Connected to database!");
  })
  .catch( ()=> {
    console.log("Connection failed!");
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    artist: req.body.artist,
    genre: req.body.genre,
    content: req.body.content
  });
    post.save().then(createdPost => {
      res.status(201).json({
      message: 'Post added successfully',
      postId: createdPost._id
    });
  });
});
app.get("/api/posts", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id:req.params.id}).then (result =>{
    console.log(result);
    res.status(200).json({message:"Post deleted!"});
  });

});

/*app.use('/api/posts',(req, res, next) => {
  const posts = [
    {
      id: 'jlkgj321654651321',
      title:'first server-side post',
      artist: 'meow meow and the meowy meows',
      genre: 'meowcore',
      content:'this is coming from the server!'
    },
    {
      id: 'mhcsdmvn3221321132',
      title:'second server-side post',
      artist: 'meow meow and the meowy meows',
      genre: 'meowcore',
      content:'this is coming from the server, too!!'
    },


];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});*/

module.exports = app;
