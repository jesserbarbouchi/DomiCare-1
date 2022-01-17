const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users.js");
// const EquipementsController = require("../controllers/Equipements");

router.route("/:userId")
      .put(UsersController.update_One) 
router.route("/fetch/:userId")
      .get(UsersController.find_One)
      // .get(EquipementsController.findOne)
module.exports = router;