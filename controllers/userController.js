const db = require('../models')
const jwt = require('jsonwebtoken')
const randomSalt = require('../helpers/randomSalt')
const crypto = require('crypto')

require('dotenv').config()

module.exports = {
	getAll: (req, res) => {
		if (req.headers.hasOwnProperty('token'))
			jwt.verify(req.headers.token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
				if (err == null)
					if (decoded.role == 'admin')
						db.User.findAll()
						.then(result => {res.json(result)})
						.catch(err => {res.json(err)})
					else res.send('bukan admin')
				else res.send(err)
			})
		else res.send('belom login')
	},

	getById: (req, res) => {
		if (req.headers.hasOwnProperty('token'))
			jwt.verify(req.headers.token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
				if (err == null)
					db.User.findById(req.params.id)
					.then(result => {res.json(result)})
					.catch(err => {res.json(err)})
				else res.send(err)
			})
		else res.send('belom login')
	},

	create: (req, res) => {
		if (req.headers.hasOwnProperty('token'))
			jwt.verify(req.headers.token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
				if (err == null)
					if (decoded.role == 'admin') {
						let createFunc = () => {
							req.body.salt = randomSalt(8)
							db.User.create(req.body)
							.then(result => {res.json(result)})
							.catch(err => {
								if (err.message == 'salt must be unique')
									createFunc()
								else
									res.json(err)
							})
						}
						createFunc()
					} else res.send('bukan admin')
				else res.send(err)
			})
		else res.send('belom login')
	},

	destroyById: (req, res) => {
		if (req.headers.hasOwnProperty('token'))
			jwt.verify(req.headers.token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
				if (err == null)
					if (decoded.role == 'admin')
						db.User.destroy({where: {id: req.params.id}})
						.then(result => {res.json(result)})
						.catch(err => {res.json(err)})
					else res.send('bukan admin')
				else res.send(err)
			})
		else res.send('belom login')
	},

	updateById: (req, res) => {
		if (req.headers.hasOwnProperty('token'))
			jwt.verify(req.headers.token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
				if (err == null)
					db.User.update(req.body, {where: {id: req.params.id}, individualHooks: true})
					.then(result => {res.json(result)})
					.catch(err => {res.json(err)})
				else res.send(err)
			})
		else res.send('belom login')
	},

	signIn: (req, res) => {
		db.User.findOne({where: {username: req.body.username}})
		.then(user => {
			if (user != null)
				if (user.password == crypto.createHmac('sha256', user.salt).update(req.body.password).digest('hex'))
					jwt.sign({role: user.role}, process.env.TOKEN_SECRET_KEY, (err, token) => {
						if (err) res.send(err)
						else res.json({token: token})
					})
				else res.send('wrong password')
			else res.send('user not found!')
		})
		.catch(err => {res.json(err)})
	},

	signUp: (req, res) => {
		let createFunc = () => {
			req.body.salt = randomSalt(8)
			// console.log(req.body);
			db.User.create(req.body)
			.then(result => {res.json(result)})
			.catch(err => {
				if (err.message == 'salt must be unique')
					createFunc()
				else
					res.json(err)
			})
		}
		createFunc()
	}
}
