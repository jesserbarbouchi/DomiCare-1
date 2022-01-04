const mongoose = require("mongoose");

const Transactions = mongoose.model(
  "Transactions",
  new mongoose.Schema({
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "ServiceSeeker",
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "ServiceSeeker",
    },
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
    },
    status: {
      type: String,
    },
    rating: {
      type: Number,
    },
    review: {
      type: String,
    },
    serviceDate: {
      type: Date,
    },

    prescription_img: {
      type: String,
    },

    adress: { String },
  })
);
module.exports = Transactions;
