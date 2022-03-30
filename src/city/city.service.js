const mongoose = require('mongoose');
const db = require('../models/city');

exports.getById = async code => {
	try {
		const data = await db.findOne({ code: code });
		return data;
	} catch {
		return null;
	}
};



exports.getListCity = async function (data) {
	try {
		const ListCity = await db.find({});
		return {
			ListCity
		}

	} catch (error) {
		console.log("ERROR: ", error);
		return null;
	}
}