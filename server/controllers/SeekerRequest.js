// const Posts = require("../models/Posts.js")
const Transactions = require("../models/Transactions.js")

module.exports = {
    send_request: async (req, res) => {
        try {
          
            const demand = await Transactions.create({ details: req.body.text ,receiverId:req.body.receiverId,senderId:req.body.senderId})
            console.log(req.body.senderId)
            res.send("request sended");
		} catch (err) {
			res.send(err);
		}
        }
    }
    
  
