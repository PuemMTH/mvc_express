const q = require("../tools/query");

const getAllCar = async () => {
  const result = await q.query("SELECT * FROM users.car_info");
  return result;
};

const create_tesla = async (data) => {
    try {
        if (data != undefined) {
            if (data["data"]["model"] == undefined) return { msg: "Not Found model" };
            if (data["data"]["color"] == undefined) return { msg: "Not Found color" };
            if (data["data"]["year"] == undefined) return { msg: "Not Found year" };
            if (data["data"]["type"] == undefined) return { msg: "Not Found type" };
            if (data["data"]["range"] == undefined) return { msg: "Not Found range" };
            if (data["data"]["function"] == undefined) return { msg: "Not Found function" };
            if (data["data"]["wheel_size"] == undefined) return { msg: "Not Found wheel_size" };
            if (data["data"]["admin_id"] == undefined) return { msg: "Not Found admin_id" };
        } else return { msg: "Someing not Found" };

        let data_ = {
            model: data["data"]["model"],
            color: data["data"]["color"],
            year: data["data"]["year"],
            type_: data["data"]["type"],
            range: data["data"]["range"],
            function_: data["data"]["function"],
            wheelSize: data["data"]["wheel_size"],
            adminId: data["data"]["admin_id"],
        }
        console.log(data_)
        const sql = `INSERT INTO users.car_info (model, color, year, \`type\`, \`range\`, \`function\`, wheel_size, admin_id) VALUES ('${data_.model}', '${data_.color}', '${data_.year}', '${data_.type_}', '${data_.range}', '${data_.function_}', '${data_.wheelSize}', '${data_.adminId}')`;
        const re = await q.query(sql)
        return { "msg": "OK" }

    } catch(e) {
        return {"msg": "Error"}
    }
};

const update_tesla = async (data) => {
    try {
        data['data']['']
    }catch{
        return {"msg": "Error"}
    }
}

module.exports = {
  getAllCar,
  create_tesla,
};
