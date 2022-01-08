const express = require("express");
const router = express.Router();
const QuestAns = require("../controllers/Forum");

router.route("/savepost")
    .get(QuestAns.find_All)
  .post(QuestAns.create_One) 
 

module.exports = router;