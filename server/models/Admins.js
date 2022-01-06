var mongoose = Require("mongoose");
var AdminsSchema=mongoose.Schema(
    {
        userName : {
        type: String,
        },
        password : {
        type: String,
        },
        email : {
        type: String,
        },
    }
)
const Admins = mongoose.model("Admins", AdminsSchema);
module.exports = Admins