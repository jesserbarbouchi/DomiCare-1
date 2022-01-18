
const Transactions = require("../models/Transactions");


module.exports = {
      CreateServiceSeekerRequest:async (req, res) => {
        const {
            seekerId,
            providerId,
            adress,
            details,
            selectedStartDate,
            selectedEndDate,
            file
        }=req.body
        try {
          
            const RequestService = await Transactions.create({
                seekerId,
                providerId,
                adress,
                details,
                selectedStartDate,
                selectedEndDate,
                file
            })
            res.send(RequestService);
		} catch (err) {
			res.send(err);
		}
    },
    GetReceivedOffers:async (req,res)=>{
        try{
            const offers = await Transactions.find({
                type:'offer'
            },
                {
                seekerId:req.params._id
            })
            res.send(offers);
        }
     catch (err) {
        res.send(err);
    }
    },
    SendServiceOffer:async(req,res)=>{
        const{
            type,postid,providerId,seekerId
        }=req.body
        try{
            const offer = await Transactions.create({type,postid,providerId,seekerId})
            res.send(offer);
        }
        
        catch (err) {
            res.send(err);
        }
    },
    GetReceivedRequests:async (req,res)=>{
        try{
            const offers = await Transactions.find({
                type:'request'
            },
                {
                providerId:req.params._id
            })
            res.send(offers);
        }
     catch (err) {
        res.send(err);
    }
    },
}