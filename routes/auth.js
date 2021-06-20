const express=require("express")
const router=express.Router()
const {renderLoginForm, loginUser, logout,renderSignUpPage }=require('../controllers/auth/auth')
const {isLoggedIn}=require('../middleware/authMiddleware')
/*---------------------
    GET Routes
----------------------*/
//@ROUTE GET /auth/login 
//@DESC Displays Login Form
//@ACCESS PUBLIC
router.get('/login', renderLoginForm)
//For Logout
router.get('/logout',[isLoggedIn], logout)
router.get('/signup', renderSignUpPage)
/*---------------------
    POST Routes
----------------------*/
router.post('/login',loginUser)
module.exports=router