const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-routes.js");

router.route("/SSSignUp")
  .post(authController.SSSignUp) 
  router.route("/EPSignUp")
  .post(authController.EPSignUp) 

module.exports = router;