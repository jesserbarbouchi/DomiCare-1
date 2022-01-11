const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users.js");

router.route("/:userId")
      .put(UsersController.update_One) 
router.route("/fetch/:userId")
      .get(UsersController.find_One)
module.exports = router;