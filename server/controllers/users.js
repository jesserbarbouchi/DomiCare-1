const ServiceProvider = require("../models/ServiceProvider.js");

module.exports = {
update_One: async (req, res, next) => {
  try {
       console.log("\nRequesting the server to update a specific user into the database ...\n");
       var {firstName,lastName,email,dateOfBirth,gender,phoneNumber,city,adress}=req.body
       console.log("req.body",req.body);
       console.log("req.params",req.params);
       console.log("req.params.userId",req.params.userId);
    
       // the server will try the following
       const ServiceP = await ServiceProvider.findOneAndUpdate({_id:req.params.userId}, {"firstName":firstName,
        "lastName":lastName,"email":email,"dateOfBirth":dateOfBirth,"gender":gender,"phoneNumber":phoneNumber,"city":city,"adress":adress}, { new: true });
       console.log("ServiceP",ServiceP);
       const ServiceProviders = await ServiceProvider.find({});
       res.status(200).json(ServiceP)
  } catch (error) {
       next(error);
  }
}
}