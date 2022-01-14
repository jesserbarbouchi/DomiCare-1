const express = require("express");
const router = express.Router();
const SeekerRequest = require("../controllers/SeekerRequest.js");

router.route("/SeekerRequest")
  .post(SeekerRequest.send_request) 


module.exports = router;