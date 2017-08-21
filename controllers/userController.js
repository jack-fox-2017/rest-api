const db = require('../models')

module.exports = {
	getAll: (req, res) => {
		db.User.findAll()
		.then(result => {res.send(result)})
		.catch(err => {res.send(err)})
	},

	getById: (req, res) => {
		db.User.findById(req.params.id)
		.then(result => {res.send(result)})
		.catch(err => {res.send(err)})
	}
}