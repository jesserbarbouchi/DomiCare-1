const express = require("express");
const router = express.Router();
const EquipementsController = require("../controllers/Equipements");

router.route("/")
  .get(EquipementsController.find_All)
  
  router.route("/fetch/:equipementsID")
  .get(EquipementsController.findByID)
  
  router.route("/equip/:equipementsID")
        .get(EquipementsController.findEquip)
router.route("/:equipementsId")
  .get(EquipementsController.findOne)
  .delete(EquipementsController.delete_one) 

  router.route("/update/:equipementsId")
  .put(EquipementsController.update_one)

router.route("/saveEquip")

  .post(EquipementsController.create_One)

router.route("/findEquip")
      .get(EquipementsController.findOne)

module.exports = router;