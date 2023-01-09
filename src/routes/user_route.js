const express = require('express');
const router = express.Router();
const user_controller = require('../controller/user_controller')

router.get('/',(req,res)=>{
    res.json({
        msg:"API Users is OK"
    })
})

router.get('/get_users',user_controller.get_user)
router.post('/create_user',user_controller.create_user)
router.put('/update_user',user_controller.update_user)
router.delete('/delete_user',user_controller.delete_user)

module.exports = router;