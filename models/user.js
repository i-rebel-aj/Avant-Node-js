const mongoose=require('mongoose')
//Let's create a table for users
//User Scema
// - User
//   - Type (Admin/User)
//   - Join Date
//   - Email
//   - Password
const userSchema=new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    }
}, {timestamps: true})
const user=mongoose.model('User', userSchema)
module.exports={user}