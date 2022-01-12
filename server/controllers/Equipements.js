const Equipement = require("../models/Equipements.js")
const ServiceProvider = require("../models/ServiceProvider.js");

module.exports = {
     create_One : (req,res) => {
          let obj =req.body.formData
          console.log("req.body",obj);
          console.log(req.body.formData)
          Equipement.create(obj)
          .then((equip)=> res.send(equip))
          .then(()=>console.log(equip))
          .catch((err)=>console.log(err))
     },
// create_One: async (req, res, next) => {
//      const { ownerId,
//        name,
//        price,
//        description,
//        reference,
//        city,
//        delivery,
//        availability,
//        transactionType} =
//        req.body;
//      try {
//        const Equip = await Equipement.create({ ownerId,
//           name,
//           price,
//           description,
//           reference,
//           city,
//           delivery,
//           availability,
//           transactionType},{new:true});
//  console.log("Equip :",Equip);
//  console.log("Equipement :",Equipement);
//  console.log("req.body fl create :",req.body);
//        res.send(Equip);
//      } catch (error) {
//        next(error);
//      }
//    },
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
  },
  findOne:  (req, res) => {
     console.log("{_id:req.params.userId}",{ownerId:req.params.ownerId},{_id:req.params.ownerId})
     console.log("req.body",req.body)
     console.log("req.body.formData",req.body.formData)
     Equipement.find({'ownerId' : [
          '61dc09dd86961a83ebacb91a']})
     .then((user)=>{
       if(user){
         res.send(user)
       }
       else res.send('user not found')
     })
     .catch((err)=> console.log(err))
 }
//   find_One: async (req, res, next) => {
//        try {
//             console.log("\nRequesting the server to give me a specific user from the database ...\n");
//             // the server will try the following
//             const Equipements = await Equipement
//                  .findById(req.params.EquipementsId)
//                     console.log("req.params.EquipementsId",req.params.EquipementsId);
//             res.status(200).json(Equipements);
//        } catch (error) {
//             next(error);
//        }
//   }
}