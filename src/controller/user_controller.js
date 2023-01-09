const user_model = require('../model/user_model');

const get_user = async(req,res) =>{
    const result = await user_model.get_users();
    console.log(typeof result);
    res.json(
        result
    )
}

const create_user = async(req,res) =>{
    const result = await user_model.create_user(req.body);
    res.json(
       result
    )
}

const update_user = async(req,res) =>{
    const result = await user_model.update_user(req.body);
    res.json(
         result
     )
}

const delete_user = async(req,res) =>{
    const result = await user_model.delete_user(req.body);
    res.json(
        result
    )
}

module.exports = {
    get_user,
    create_user,
    update_user,
    delete_user
}