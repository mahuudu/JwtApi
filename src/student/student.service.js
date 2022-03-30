const mongoose = require('mongoose');
const db = require('../models/student');

exports.getStudentId = async id => {
	try {
		console.log(id)
		return await db.findOne({ _id: id });
	} catch {
		return null;
	}
};

exports.createStudent = async data => {
	try {
		return await db.create({ ...data });
	} catch (error) {
		console.log("ERROR: ", error);
		return false;
	}
};

exports.updateStudent = async data => {
	try {
		console.log('data ne',data);
		let id = data._id;
		console.log('id ne 1', id);
		const student = db.findOne({ _id : id});

		if(student){
			console.log('id ne', id);
			return await db.updateOne(
				{ _id : id},
				{
					name : data.name,
					age : data.age,
					gender: data.gender,
					mark : data.mark,
					city : data.city,
				});
		}else{
			return {
				status: false,
				message: 'Student Not Found'
			}
		}
		
	} catch (error) {
		console.log("ERROR: ", error);
		return false;
	}
};


exports.delete = async id => {
	try {
		await db.deleteOne({ _id : id });
		return {
			msg : "success delete",
		}
	} catch (error) {
		console.log("ERROR: ", error);
		return false;
	}
};

exports.getListStudents = async function (query) {
	try {
		const limit = query.limit || 10;
        const page = (query.page - 1) >= 0 ? query.page - 1 : 0;

		const conditions = await getCondition(query);
		const sortCondition = await getSort(query);

		const listStudents = await db.find(conditions,{})
		.limit(limit)
		.skip(page * limit)
		.sort(sortCondition);

		const total = await db.find(conditions).count();

		console.log('page ne', page)
		return {
			limit : limit,
			page : page+1,
			total: total,
			totalPage: Math.ceil(total / limit),
			student: listStudents
		}

	} catch (error) {
		console.log("ERROR: ", error);
		return null;
	}
}

async function getCondition(query){
	let conditions = {};
	if (query.gender) {
		conditions['gender'] = query.gender
	}
	if (query.city) {
		conditions['city'] = query.city
	}

	if (query.name_like) {
		const name = { $regex: `.*${query.name_like}.*`}

		console.log(name)
		
		conditions['name'] = name
	}

	return conditions
}

async function getSort(query){
	let conditions = {};

	if (query.sort == 'mark' && query.order == 'asc') {
		conditions['mark'] = 1;
	}
	if (query.sort == 'mark' && query.order == 'desc') {
		conditions['mark'] = -1;
	}


	console.log('sort',conditions);
	return conditions
	
}


