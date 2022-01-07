const express = require("express");
const router = express.Router();
const ServiceSeekerController = require("../controllers/ServiceSeeker.js");

router.route("/SignUp")
  .post(ServiceSeekerController.create) 


module.exports = router;