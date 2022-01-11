const Equipement = require("../models/Equipements.js")

module.exports = {
  find_All: async (req, res, next) => {
       try {
            console.log("query", req.query);               // the server will try the following
            console.log("params", req.params);
            const Equipements = await Equipement
                 .find({})
               console.log("Equipements",Equipements);
            res.status(200).json(Equipements);
       } catch (error) {
            next(error);
       }
  }, find: async (req, res, next) => {
       // get all the users
       try {
            console.log("body",req.headers);
            console.log("query", req.query);               // the server will try the following
            console.log("params", req.params);
            const Equipements = await Equipement
                 //{fullname:"/"+req.query.fullname+"/",city:"/"+req.query.city+"/",specialty:"/"+req.query.specialty+"/"}
                 .find({ city: { $regex: req.query.city }})
               
            // .populate(["parent", "provider"])
            // .select('-password')

            res.status(200).json(Equipements);
       } catch (error) {
            next(error);
       }
  }, find_One: async (req, res, next) => {
       try {
            console.log("\nRequesting the server to give me a specific user from the database ...\n");
            // the server will try the following
            const Equipements = await Equipement
                 .findById(req.params.EquipementsId)
                    console.log("req.params.EquipementsId",req.params.EquipementsId);
            res.status(200).json(Equipements);
       } catch (error) {
            next(error);
       }
  }
}