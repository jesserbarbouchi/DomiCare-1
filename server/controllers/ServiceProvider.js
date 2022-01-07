const posts = require('../models/Posts')
module.exports = {
    share_service: async (req, res) => {
		try {
			console.log(req.body.formData)
			const tools = await posts.create(req.body.formData)
			res.send("succ");
		} catch (err) {
			res.send(err);
		}
	},
}
