/********************* Requires *********************/

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Equipements = require("./routers/Equipements.js")
require("dotenv").config();
var cors = require("cors");
app.use(cors());

/********************* Database *********************/

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected Database Successfully");
});



/********************** Routes **********************/

app.use("/Equipements", Equipements);
/**************** Listening Requests ****************/
const Port = process.env.PORT
app.listen(Port, function (req, res) {
    console.log(`Server is started on port ${Port}`);
});
