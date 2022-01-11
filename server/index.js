/********************* Requires *********************/

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const QuestAns = require("./routers/Question&Answer")
const Equipements = require("./routers/Equipements.js")
const ServiceSeeker = require("./routers/ServiceSeeker.js");
const serviceProvidersList = require("./routers/serviceProvidersList.js")
const auth = require("./routers/auth-routes");
const ServiceProvider =  require("./routers/ServiceProvider")
const ServiceProviderProfile =  require("./routers/ServiceProviderProfile")
require("dotenv").config();
var cors = require("cors");
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/********************* Database *********************/

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected Database Successfully");
});



/********************** Routes **********************/
app.use("/Equipements", Equipements);
app.use("/serviceProvidersList",serviceProvidersList)
app.use("/ServiceSeeker", ServiceSeeker);
app.use("/savepost",QuestAns)
app.use("/auth", auth);
app.use("/ServiceProvider", ServiceProvider);
/**************** Listening Requests ****************/
const Port = process.env.PORT||3000;
app.listen(Port, function (req, res) {
    console.log(`Server is started on port ${Port}`);
});
