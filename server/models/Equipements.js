const mongoose = require("mongoose");
const Equipement = mongoose.model(
  "Equipement",
  new mongoose.Schema({
    name: {
      type: String
    },
    reference: {
      type: String
    },
    description: {
      type: String
    },
    delivery: {
      type: String
    },
    transactionType: {
      type: String
    },
    price: {
      type: Number
    },
    picture: {
      type: String
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceProvider"
    },
    city: { String }
  })
);
module.exports = Equipement;
