const express = require("express");
const router = express.Router();
const ServiceSeekerRequests = require("../controllers/ServiceSeekerRequests.js");

router.route("/ServiceSeekerRequests/:_id")
  .get(ServiceSeekerRequests.get_All_Transactions) 


module.exports = router;