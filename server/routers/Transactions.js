const express = require("express");
const router = express.Router();
const Transactions = require("../controllers/Transactions");


router.route("/seekersendrequest")
  .post(Transactions.CreateServiceSeekerRequest) 
router.route("/serviceoffers/:_id")
  .get(Transactions.GetReceivedOffers) 
router.route("/OfferMyService")
  .post(Transactions.SendServiceOffer)
  router.route("/servicerequests")
  .get(Transactions.GetReceivedRequests)
  router.route("/sendedoffers")
  .get(Transactions.GetSendedOffers)
  router.route("/sendedrequests")
  .get(Transactions.GetSendedRequests)
module.exports = router;