const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  genre: { type: String },
  content: { type: String }
});

module.exports =  mongoose.model('Post', postSchema);
