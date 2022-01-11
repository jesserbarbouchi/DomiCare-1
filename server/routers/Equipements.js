const express = require("express");
const router = express.Router();
const EquipementsController = require("../controllers/Equipements");

router.route("/")
  .get(EquipementsController.find_All)
  // .get(EquipementsController.find_One) 
//   .put(EquipementsController.update_One) 
//   .delete(EquipementsController.remove_One)  
router.route("/:equipementsId")
  .get(EquipementsController.find_One) 

module.exports = router;