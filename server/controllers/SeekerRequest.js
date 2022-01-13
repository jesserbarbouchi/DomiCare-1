// const Posts = require("../models/Posts.js")
const Transactions = require("../models/Transactions.js")
const ServiceSeeker = require ("../models/ServiceSeeker")
const ServiceProvider = require ("../models/ServiceProvider")

module.exports = {
    send_request: async (req, res) => {
        try {
          
            const demand = await Transactions.create({ details: req.body.text ,address:req.body.address,receiverId:req.body.receiverId,senderId:req.body.senderId})
           
            console.log(demand.senderId)
            res.send("request sended");
           

		} catch (err) {
			res.send(err);
		}
    }
 
    }
    
  
