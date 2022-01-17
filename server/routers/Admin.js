const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin");



router.route("/adminLogin")
  .post(AdminController.login) 
router.route("/getposts")
  .get(AdminController.get_all_posts)
router.route("/:_postdeletedId")
  .delete(AdminController.delete_post)

module.exports = router;