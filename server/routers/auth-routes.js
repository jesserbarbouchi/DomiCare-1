const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-routes.js");

router.route("/serviceSeekerSignUp")
  .post(authController.create) 


module.exports = router;