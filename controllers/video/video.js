//Video Controller Goes here
const {Video}=require('../../models/video')
//WA-<>-<12> 

//To Upload Video
const uploadVideo=async(req, res)=>{
    try{
        console.log(`Logged in User is `)
        console.log(req.session.user) 
        const {videoName, videoDescription}=req.body
        const newVideo={
            title: videoName,
            description: videoDescription,
            creator: req.session.user._id,
            filePath: req.file.path,
            fileType: req.file.mimetype
        }
        console.log(req.body)
        console.log(req.file)
        //Do some more stuff
        const newUploadedVideo=new Video(newVideo)
        await newUploadedVideo.save()
        req.flash("success", "Video Uploaded Success")
        res.redirect('/')
    }catch(err){
        req.flash("error", `Something went wrong ${err.message}`)
        console.log(err)
        //To Remove from filesystem ( fs ) 
        res.redirect('/error')
    }
}

//Like
const likeVideo=async (req, res)=>{
    try{
        const videoId=req.params.id
        const foundVideo=await Video.findById(videoId)
        console.log(foundVideo)
        let isLiked=false, isUnliked=false
        for (const user of foundVideo.likeUnlikeBy) {
            if(req.session.user._id.toString()===user.id){
                if(user.status==='LIKE'){
                    isLiked=true
                }else if(user.status==='UNLIKE'){
                    isUnliked=true
                }                
            }
        }
        if(isLiked){
            throw new Error('Video is already Liked')
        }else{
            foundVideo.likes++
            if(isUnliked){
                foundVideo.unlikes--
                for (const user of foundVideo.likeUnlikeBy) {
                    if(req.session.user._id.toString()===user.id){
                        user.status='LIKE' 
                        break           
                    }
                }
                await foundVideo.save()
            }else{
                let userStat={
                    id: req.session.user._id.toString(),
                    status: 'LIKE'
                }
                foundVideo.likeUnlikeBy.push(userStat)
                await foundVideo.save()
            }
        }
        res.redirect('/')
    }catch(err){
        console.log(err)
    }
}

//To Display the form
const renderUploadVideoForm= async(req, res)=>{
    try{
        res.render('uploadVideo')
    }catch(err){
        req.flash("error", `Something went wrong ${err.message}`)
        console.log(err)
        res.redirect('/error')
    }
}
//To Display All Videos on Home
const displayAllVideosHome=async(req, res)=>{
    try{
        const foundVideos=await Video.find({}).populate('creator', 'name email')
        //console.log(foundVideos)
        res.render('./landing/home', {videos:foundVideos})
    }catch(err){
        console.log(err)
    }
}



module.exports={uploadVideo, renderUploadVideoForm, displayAllVideosHome, likeVideo}


// Coalescing Operator 
// {
//     obj1{
//     }
// }
// console.log(ob1?.obj2?.key)