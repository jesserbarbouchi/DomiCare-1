const ServiceSeeker = require("../models/ServiceSeeker.js");
module.exports={
    create: (req,res)=>{
        console.log(req.body.formData)
        var data=req.body.formData
        ServiceSeeker.find({email : data.email })
        .then((user)=>{
            if(user){
                res.send ('email already in use')
            }
          else{
              console.log('its 8:15 i need to push my work')
          }
        })
        .catch((err)=> console.log(err))
       },
}