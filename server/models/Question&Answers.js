const mongoose = require("mongoose");

const QuestAns = mongoose.model(
  "QuestAns",
  new mongoose.Schema({
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "ServiceSeeker",
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
