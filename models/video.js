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
    },
    likes:{
        type: Number,
        default: 0
    },
    unlikes:{
        type: Number,
        default: 0
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})
const Video=mongoose.model('Video', videoSchema)
module.exports={Video}