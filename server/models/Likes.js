const mongoose = require("mongoose");

const Likes = mongoose.model(
  "Likes",
  new mongoose.Schema({
    likedEmail: {
      type: String
    },
    userEmail: {
        type: String
      },
    likedType: {
      type: String,
    }
  })
);
module.exports = Likes;
