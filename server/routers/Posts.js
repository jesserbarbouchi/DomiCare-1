const express = require("express");
const router = express.Router();
const Posts = require("../controllers/Posts");


router.route("/CreateServiceSeekerPost")
  .post(Posts.CreateServiceSeekerPost) 
 

module.exports = router;