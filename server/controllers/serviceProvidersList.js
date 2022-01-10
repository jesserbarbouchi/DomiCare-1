const ServiceProvider  = require('../models/Posts')
const sp = require ("../models/ServiceProvider.js")


module.exports = {
    find_all_serviceProviders: async (req, res) => {
		try {
			const serviceP = await ServiceProvider.find()
			res.send(serviceP);
		} catch (err) {
			res.send(err);
		}
	},
	create_service_provider: async (req, res) => {

		
		
		try {
			const { userName, speciality, city, gender, picture, content } = req.body
			const service_provider = await ServiceProvider.create({
				userName, speciality, city, gender, picture, content
			
				
			})
			res.status(200).send(service_provider);
		}
		catch (error) {
			console.log(error)
		}
		
		
	},
	find_all_sp: async (req, res) => {
		try {
			const serviceP = await sp.find()
			res.send(serviceP);
		} catch (err) {
			res.send(err);
		}
	},








}
