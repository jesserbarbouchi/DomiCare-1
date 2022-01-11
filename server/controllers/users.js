const ServiceProvider = require("../models/ServiceProvider.js");

module.exports = {
update_One: async (req, res, next) => {
  try {
       console.log("\nRequesting the server to update a specific user into the database ...\n");
       var {firstName,lastName,email,dateOfBirth,gender,phoneNumber,city,adress}=req.body.formData
       console.log("req.body",req.body);
       console.log("infos",{firstName,lastName,email,dateOfBirth,gender,phoneNumber,city,adress});
       console.log("req.body.formData",req.body.formData);
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
},
find_One:  (req, res) => {
  ServiceProvider.findOne({_id:req.params.userId})
  .then((user)=>{
    if(user){
      res.send(user)
    }
    else res.send('user not found')
  })
  .catch((err)=> console.log(err))
  // try {
  //   // var {firstName,lastName,email,dateOfBirth,gender,phoneNumber,city,adress}=req.body
  //      console.log("\nRequesting the server to give me a specific user from the database ...\n");
  //      // the server will try the following
  //      const ServiceP2 = await ServiceProvider
  //           .findById({_id:req.params.userId},{new:true})
  //              console.log("req.params.userId1",{_id:req.params.userId});
  //              console.log("req.params.userId2",req.params.userId,"serviceP2",ServiceP2);
  //      res.send(ServiceP2)
  // } catch (error) {
  //      next(error);
  // }
}
}