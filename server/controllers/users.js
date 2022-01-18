const ServiceProvider = require("../models/ServiceProvider.js");
const ServiceSeeker =require("../models/ServiceSeeker.js")
module.exports = {
  find_One: (req,res)=>{
    console.log(req.params.userId)
    const userId = req.params.userId
    ServiceSeeker.findById({_id : userId})
    .then((user)=>{
      if (user){
        res.send(user)
      }
      else {
       res.send ('user Not found !!')
      }
    })
    .catch((err)=> console.log(err))
  }
}