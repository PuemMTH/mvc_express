const query = require('../tools/query');

const get_users = async () => {
    const sql = 'SELECT * FROM user';
    const result = await query.query(sql);
    return result;
}

const create_user = async (data)=>{
    const sql = `INSERT INTO user (name, surname, age) values ('${data.name}', '${data.surname}', '${data.age}')`;
    const result = await query.query(sql);
    return {"msg":`user ${data.name} is created`};
}

const update_user = async (data)=>{
    const sql = `UPDATE user SET name = '${data.name}', surname = '${data.surname}', age = '${data.age}' WHERE iduser = '${data.id}'`;
    const result = await query.query(sql)
    return {"msg":`user ${data.name} is updated`};
}

const delete_user = async (data)=>{
    const sql = `DELETE FROM user WHERE iduser = '${data.id}'`;
    const result = await query.query(sql)
    return {"msg":`userid ${data.id} is deleted`};
}

module.exports = {
    get_users,
    create_user,
    update_user,
    delete_user
}
