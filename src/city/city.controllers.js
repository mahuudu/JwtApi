const cityServices = require('../city/city.service');


exports.listCitys = async(req,res) => {
	try {
		const listCitys = await cityServices.getListCity();
		return res.send({
			status: true,
			data: listCitys.ListCity,
			pagination: {
				limit: 5,
				page: 1,
				total: 5,
			}
		});
	} catch (error) {
		return res.send({
			status: false,
			data: null
		});
	}
}