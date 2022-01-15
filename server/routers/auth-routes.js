const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-routes.js");

router.route("/SSSignUp")
  .post(authController.SSSignUp) 
  router.route("/EPSignUp")
  .post(authController.EPSignUp) 
  router.route("/SPSignUp")
  .post(authController.SPSignUp) 
  router.route("/Login")
  .post(authController.Login) 
  router.route("/ForgetPassword")
  .post(authController.ForgetPassword)
  router.route("/FetchCodeVerification/:email")
  .get(authController.FetchCodeVerification)
  router.route("/DeleteCodeVerification/:email")
  .delete(authController.DeleteCodeVerification)
  router.route("/ResetPassword")
  .post(authController.ResetPassword)
module.exports = router;