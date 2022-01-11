var mongoose = require("mongoose");

const ResetPasswordSchema = mongoose.Schema({
    code: String,
    email: String,
});


  const ResetPassword = mongoose.model("ResetPassword", ResetPasswordSchema);
module.exports =  ResetPassword;