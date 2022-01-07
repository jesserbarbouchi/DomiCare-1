const express = require("express");
const router = express.Router();
const ServiceProvider = require("../controllers/ServiceProvider.js");

router.route("/shareservice")
  .post(ServiceProvider.share_service) 


module.exports = router;