const express=require("express")
const router=express.Router()
const {renderLoginForm, loginUser}=require('../../controllers/auth/auth')
/*---------------------
    GET Routes
----------------------*/
//@ROUTE GET /auth/login 
//@DESC Displays Login Form
//@ACCESS PUBLIC
router.get('/login', renderLoginForm)
/*---------------------
    POST Routes
----------------------*/
router.post('/login',loginUser)
module.exports=router