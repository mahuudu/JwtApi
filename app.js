const express = require('express');
const createError = require('http-errors');
require('express-async-errors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();
const db = require('./src/config/db');
db.connect();

const authRouter = require('./src/auth/auth.routes');
const userRouter = require('./src/users/users.routes');
const cityRouter = require('./src/city/city.routes');
const studentRouter = require('./src/student/student.routes');


const app = express();

app.use(morgan('dev'));
app.use(
	bodyParser.urlencoded({
		extended: false,
	}),
);
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('APP IS RUNNING');
});
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/city', cityRouter);
app.use('/student', studentRouter);

app.use((req, res, next) => {
	next(createError(404));
});

app.use((err, req, res) => {
	console.log(err.stack);
	res.status(err.status || 500).send(err.message);
});

const server = app.listen(process.env.PORT,'127.0.0.1', () => {
	console.log(`Express running → PORT ${server.address().port}`);
});