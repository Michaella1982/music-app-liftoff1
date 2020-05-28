const express = require('express');

const app = express();

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
