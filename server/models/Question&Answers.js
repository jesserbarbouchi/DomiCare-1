const mongoose = require("mongoose");

const QuestAns = mongoose.model(
  "QuestAns",
  new mongoose.Schema({
    owner: { 
      type: Object,
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
      default:0
    },
    DislikesCount: {
      type: Number,
    },
    participants:{
      type:Array ,default:[]
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
