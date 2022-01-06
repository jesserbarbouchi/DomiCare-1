const express = require("express");
const router = express.Router();
const EquipementsController = require("../controllers/Equipements");

router.route("/Equipements")
  .get(EquipementsController.find) 
//   .put(EquipementsController.update_One) 
//   .delete(EquipementsController.remove_One)  

module.exports = router;