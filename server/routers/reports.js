const express = require("express");
const router = express.Router();
const report = require("../controllers/reports.js");

router.route("/")
  .post(report.push) 


module.exports = router;