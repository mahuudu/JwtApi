const express = require('express');
const router = express.Router();
const authMiddleware = require('../auth/auth.middlewares');

const isAuth = authMiddleware.isAuth;
const StudentController = require('./student.controllers');


router.get('/getListStudent', isAuth, StudentController.listStudents);
router.delete('/delete/:id', isAuth, StudentController.deleteStudent);
router.post('/add',isAuth,StudentController.add)
router.post('/update',isAuth,StudentController.update)
router.get('/getByid/:id', isAuth,StudentController.getByid);
module.exports = router;