const mongoose=require('mongoose')
const bcrypt = require("bcrypt");
//Let's create a table for users
//User Scema
// - User
//   - isAdmin
//   - Join Date
//   - Email
//   - Password
const userSchema=new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
}, {timestamps: true})

userSchema.methods={
    authenticate: function  (plainpassword) {
        const isValidPass = bcrypt.compareSync(plainpassword, this.password);
        console.log(isValidPass)
        if(isValidPass){
            return true;
        }else{
            return false;
        }
    }
}
const User=mongoose.model('User', userSchema)
module.exports={User}