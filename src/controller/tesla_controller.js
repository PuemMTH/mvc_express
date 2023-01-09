const tesla_model = require('../model/tesla_model');

const get_user = async(req,res) => {
    const result = await tesla_model.getAllCar();
    res.json(result)
}

const create_tesla = async(req,res) => {
    const result = await tesla_model.create_tesla(req.body)
    res.json(result)
}

module.exports = {
    get_user,
    create_tesla
}