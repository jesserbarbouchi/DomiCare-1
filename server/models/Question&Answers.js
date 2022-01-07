const mongoose = require("mongoose");

const QuestAns = mongoose.model(
  "QuestAns",
  new mongoose.Schema({
    owner: {
     
      type: String,
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
      type: String,
    },
    likesCount: {
      type: Number,
    },
    DislikesCount: {
      type: Number,
    },
    comments: {
      type: Array,
    },
    type: {
      type: String,
    },
  })
);
module.exports = QuestAns;
