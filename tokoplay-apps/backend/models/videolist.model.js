const mongoose = require('mongoose');

const videolistSchema = new mongoose.Schema({
  videoId : {
    required : true,
    type : Number
  },
  thumbail : {
    required : true,
    type : String
  },
  altImage : {
    required : true,
    type : String
  }
});

module.exports = mongoose.model('videolists', videolistSchema);