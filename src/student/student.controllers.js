const studentService = require('../student/student.service');


exports.listStudents = async (req, res) => {
	try {
		const query = req.query

		const listStudent = await studentService.getListStudents(query);

		return res.send({
			status: true,
			data: listStudent.student,
			pagination: {
				limit: listStudent.limit,
				page: listStudent.page,
				total: listStudent.total,
			}
		});
	} catch (error) {
		return res.send({
			status: false,
			data: null
		});
	}
}

exports.getByid = async (req, res) => {
	try {
		const {id} = req.params;
		const student = await studentService.getStudentId(id);
		return res.send({
			status: true,
			data: student,
		});
	} catch (error) {
		return res.send({
			status: false,
			data: null
		});
	}
}

exports.deleteStudent = async (req, res) => {
	try {
		const {id} = req.params
		const deleteStudent = await studentService.delete(id);

		return res.send({
			status: true,
			data: deleteStudent.msg,
		});
	} catch (error) {
		return res.send({
			status: false,
			data: null
		});
	}
}

exports.add = async(req,res) => {
	try {
		const data = req.body;
		const student = await studentService.createStudent(data);
		return res.send({
            status: true,
            message: "Create success",
            data: student
        });

	} catch (error) {
		return res.send({
			status: false,
			data: 'error'
		});
	}
}

exports.update = async(req,res) => {
	try {
		const data = req.body;
		const student = await studentService.updateStudent(data);
		return res.send({
            status: true,
            message: "update success",
            data: student
        });

	} catch (error) {
		return res.send({
			status: false,
			data: 'error'
		});
	}
}