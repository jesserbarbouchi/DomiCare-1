const serviceProviders = require('../models/ServiceProvider.js')
module.exports = {
    find_all_serviceProviders: async (req, res) => {
		try {
			const tools = await serviceProviders.find()
			res.send(serviceProviders);
		} catch (err) {
			res.send(err);
		}
	},








}
