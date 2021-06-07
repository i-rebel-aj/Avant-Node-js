const express=require("express")
const router=express.Router()
const {renderLoginForm, loginUser, logout}=require('../../controllers/auth/auth')
/*---------------------
    GET Routes
----------------------*/
//@ROUTE GET /auth/login 
//@DESC Displays Login Form
//@ACCESS PUBLIC
router.get('/login', renderLoginForm)
//For Logout
router.get('/logout', logout)
/*---------------------
    POST Routes
----------------------*/
router.post('/login',loginUser)
module.exports=router