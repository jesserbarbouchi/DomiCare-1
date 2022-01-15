const Transactions = require("../models/Transactions.js");
const ServerSeeker = require 
module.exports = {
    get_All_Transactions: async (req, res) => {
        // const id = req.params.id
        // const data =Transactions.findById(id).then((info) => {
        //     console.log("====>>>>>",info)
            
        // }).catch(err=>console.log(err))
   
        try {
             const id = req.params.id
            const data = await Transactions.findById(id)
            console.log(id)
            res.send(data)
            // const ssinfo=await 
            
        }
        catch (error) {
            console.log(error)
        }
        
        
    },
    // display_request_info: async (req, res) => {
    //     try {
    //         const ssinfo = await ServiceSeeker.findById({ id: demand.senderId })
    //         console.log(ssinfo)
            
    //     }
    //     catch (err) {
	// 		res.send(err);
	// 	}

    // }
  
}