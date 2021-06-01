const mongoose=require('mongoose')
//Let's create a table for video
//Video Scema
// - Video
//   - Title
//   - Like/Dislike
//   - Description
//   - Uploader
//   - Publish Date

const videoSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
}, {timestamps: true})
const video=mongoose.model('Video', videoSchema)
module.exports={video}