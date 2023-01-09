const express = require('express')
const tesla = express.Router();
const tesla_controller = require('../controller/tesla_controller')

tesla.get('/', (req, res) => {
    res.json({
        msg: "API Tesla is OK"
    })
})

tesla.get('/getall', tesla_controller.get_user)
tesla.post('/create', tesla_controller.create_tesla)

module.exports = tesla;