var mongoose = require("mongoose");
var ServiceSeekerSchema=mongoose.Schema(
    {
      type: {
        type: String,
        default : 'serviceSeeker'
      },
        firstName: {
          type: String,
        },
        lastName: {
          type: String,
        },
        userName: {
          type: String,
        },
        email: {
          type: String,
        },
        password: {
          type: String,
        },
        adress:{
          type:String,
         },
        city: {
          type: String,
        },
        phoneNumber: {
          type: Number,
        },
        gender: {
          type: String,
        },
        dateOfBirth:{
          type: String,
        },
        picture: {
          type: String,
        },
        banned : {
          type : Boolean ,
          default : false
        },
        verified : {
          type : Boolean ,
          default : false
        },
        createdAt: {
          type: Date,
          immutable: true,
          default: () => Date.now(),
        },
      },
)
const ServiceSeeker = mongoose.model("ServiceSeeker", ServiceSeekerSchema);
module.exports =  ServiceSeeker