const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

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
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.use('/api/posts',(req, res, next) => {
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
});

module.exports = app;
