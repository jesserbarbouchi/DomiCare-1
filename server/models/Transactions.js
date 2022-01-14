const mongoose = require("mongoose");

const Transactions = mongoose.model(
  "Transactions",
  mongoose.Schema({
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceSeeker",
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceProvider",
    },
    
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
    },
    status: {
      type: String,
    },
    details: {
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
