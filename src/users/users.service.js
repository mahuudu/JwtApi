const mongoose = require('mongoose');
const db = require('../models/user');

exports.getUser = async username => {
	try {
		const data = await db.findOne({ username: username });
		return data;
	} catch {
		return null;
	}
};

exports.createUser = async user => {
	try {
		return await db.create({ ...user });
	} catch (error) {
		console.log("ERROR: ", error);
		return false;
	}
};

exports.updateRefreshToken = async (username, refreshToken) => {
	try {
		return await db.findOneAndUpdate({ username: username }, {
			refreshToken: refreshToken
		});
	} catch (error) {
		console.log("ERROR: ", error);
		return false;
	}
};

exports.getListUser = async function (data) {
	try {
		const listUsers = await db.find({})
		return {
			listUsers
		}

	} catch (error) {
		console.log("ERROR: ", error);
		return null;
	}
}