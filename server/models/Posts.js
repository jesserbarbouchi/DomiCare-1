const mongoose = require("mongoose");

const Posts = mongoose.model(
  "Posts",
  new mongoose.Schema({
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceProvider",
    },
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
    },
    title: {
      type: String,
    },
    content: {
      type: String
    },
    city: {
      type: String,
    },
    type: {
      type: String,
    },
    availability: {
      type: Date,
    },
    prescription_img: {
      type: String,
    },

    adress: { String },
  })
);
module.exports = Posts;
