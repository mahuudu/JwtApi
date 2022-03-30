const express = require('express');
const router = express.Router();

const CityController = require('./city.controllers');


router.get('/getListCity', CityController.listCitys);


module.exports = router;