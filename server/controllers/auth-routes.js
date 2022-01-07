const ServiceSeeker = require("../models/ServiceSeeker.js");
const ServiceProvider = require("../models/ServiceProvider.js");
const bcrypt = require("bcrypt");

module.exports={
    create: (req,res)=>{
        console.log(req.body.formData)
        var data=req.body.formData
        ServiceSeeker.findOne({email : data.email })
        .then((user)=>{
            if(user){
                res.send ('email already in use')
            }
          else{
              ServiceProvider.findOne({email : data.email })
              .then((user)=>{
                  if(user){
                      res.send ('email already in use')
                  }
                  else {
                      
                  }
              })
          }
        })
        .catch((err)=> console.log(err))
       },
}