const express = require("express");
const router = express.Router();

router.route("/serviceProvidersList")
  .get(serviceProvidersList.find_all_serviceProviders) 


module.exports = router;