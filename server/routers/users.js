const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users.js");
// const EquipementsController = require("../controllers/Equipements");

router.route("/ServiceSeeker/Fetch/:userId")
      .get(UsersController.find_One)
      // .get(EquipementsController.findOne)
module.exports = router;