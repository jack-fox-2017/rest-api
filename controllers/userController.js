const db = require('../models')

module.exports = {
	getAll: (req, res) => {
		db.User.findAll()
		.then(result => {res.json(result)})
		.catch(err => {res.json(err)})
	},

	getById: (req, res) => {
		db.User.findById(req.params.id)
		.then(result => {res.json(result)})
		.catch(err => {res.json(err)})
	},

	create: (req, res) => {
		db.User.create(req.body)
		.then(result => {res.json(result)})
		.catch(err => {res.json(err)})
	},

	destroyById: (req, res) => {
		db.User.destroy({where: {id: req.params.id}})
		.then(result => {res.json(result)})
		.catch(err => {res.json(err)})
	},

	updateById: (req, res) => {
		db.User.update(req.body, {where: {id: req.params.id}})
		.then(result => {res.json(result)})
		.catch(err => {res.json(err)})
	}
}
