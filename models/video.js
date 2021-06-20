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
    },
    filePath:{
        type: String
    },
    fileType:{
        type: String
    },
    //Denormalize
    likeUnlikeBy:[
        {
            id: String,
            //LIKE, UNLIKE
            status:{
                type: String,
                enum:['LIKE', 'UNLIKE']
            }
        }
    ]
}, {timestamps: true})
const Video=mongoose.model('Video', videoSchema)
module.exports={Video}