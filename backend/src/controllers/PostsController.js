const axios = require('axios');

module.exports = {
	async index(req, res) {
		axios.get('http://jsonplaceholder.typicode.com/posts')
			.then(function (response) {
				res.send(response.data);
			})
			.catch(function (error) {
				res.send(error);
			});
	},

	async show(req, res) {
		axios.get('http://jsonplaceholder.typicode.com/posts')
			.then(function (response) {
				res.send(response.data);
			})
			.catch(function (error) {
				res.send(error);
			});
	},
};