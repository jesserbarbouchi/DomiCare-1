var mongoose = require("mongoose");
var ServiceSeekerSchema=mongoose.Schema(
    {
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
        createdAt: {
          type: Date,
          immutable: true,
          default: () => Date.now(),
        },
      },
    
)
const ServiceSeeker = mongoose.model("ServiceSeeker", ServiceSeekerSchema);
module.exports =  ServiceSeeker