const ServiceProvider = require('../models/ServiceProvider.js')


module.exports = {
    find_all_serviceProviders: async (req, res) => {
		try {
			const tools = await ServiceProvider.find()
			res.send(ServiceProvider);
		} catch (err) {
			res.send(err);
		}
	},
	create_service_provider: async (req, res) => {

		
		
		try {
			const { userName, speciality, city, gender, picture, services } = req.body
			const service_provider = await  ServiceProvider.create({
				userName, speciality, city, gender, picture, services
			
				
			})
			// const doc = await ServiceProvider.save();
			res.status(200).send(service_provider);
		}
		catch (error) {
			console.log(error)
		}
		
	}








}
