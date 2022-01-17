const express = require("express");
const router = express.Router();
const Transactions = require("../controllers/Transactions");


router.route("/seekersendrequest")
  .post(Transactions.CreateServiceSeekerRequest) 
  

 

module.exports = router;