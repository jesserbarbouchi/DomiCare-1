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
            res.send("request sended");
		} catch (err) {
			res.send(err);
		}
    }
}