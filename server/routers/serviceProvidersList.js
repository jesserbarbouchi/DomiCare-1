const express = require("express");
const router = express.Router();
const serviceProvidersListController = require("../controllers/serviceProvidersList.js")

router.route("/serviceProvidersList")
  .get(serviceProvidersListController.find_all_serviceProviders) 
  router.route("/serviceProvidersList")
  .get(serviceProvidersListController.find_all_sp) 
router.route("/serviceProvidersList")
  .post(serviceProvidersListController.create_service_provider)


module.exports = router;