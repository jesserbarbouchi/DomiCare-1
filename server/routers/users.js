const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users.js");

router.route("/ServiceSeeker/Fetch/:userId")
      .get(UsersController.find_One)
module.exports = router;