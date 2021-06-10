//User Routes

const express=require("express")
const router=express.Router()
const {signupUser}=require('../controllers/user/user')
/*---------------------
    POST Routes
----------------------*/
router.post('/',signupUser)
module.exports=router