//Landing Routes Goes Here
const express=require("express")
const router=express.Router()
const {uploadVideo, renderUploadVideoForm }=require('../controllers/video/video')
/*---------------------
    GET Routes
----------------------*/
router.get('/upload',renderUploadVideoForm)
/*---------------------
    POST Routes
----------------------*/
router.post('/',uploadVideo)
module.exports=router