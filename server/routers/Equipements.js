const express = require("express");
const router = express.Router();
const EquipementsController = require("../controllers/Equipements");

router.route("/")
  .get(EquipementsController.find_All) 
//   .put(EquipementsController.update_One) 
//   .delete(EquipementsController.remove_One)  

module.exports = router;