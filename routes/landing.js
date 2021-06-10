const express=require("express")
const router=express.Router()
const {displayAllVideosHome }=require('../controllers/video/video')
/*---------------------
    GET Routes
----------------------*/
router.get('/',displayAllVideosHome)

module.exports=router