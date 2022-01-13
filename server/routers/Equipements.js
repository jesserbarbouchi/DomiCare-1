const express = require("express");
const router = express.Router();
const EquipementsController = require("../controllers/Equipements");

router.route("/")
  .get(EquipementsController.find_All)
  // .get(EquipementsController.find_One) 
//   .put(EquipementsController.update_One) 
//   .delete(EquipementsController.remove_One)  
router.route("/:equipementsId")
  .get(EquipementsController.findOne)
  .delete(EquipementsController.delete_one) 

router.route("/saveEquip")
  .post(EquipementsController.create_One)

router.route("/findEquip")
      .get(EquipementsController.findOne)

module.exports = router;