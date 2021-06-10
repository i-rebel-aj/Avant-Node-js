//User Controller Goes Here
const bcrypt=require("bcrypt")
const {User}=require('../../models/user')
//Signup User Route Goes Here
exports.signupUser=async (req, res)=>{
    try{
        //TODO- Confirm Password
        const newUser={
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        }
        const salt=bcrypt.genSaltSync(10)
        newUser.password= bcrypt.hashSync(newUser.password, salt)
        const user=new User(newUser)
        await user.save()
        res.redirect('/')
    }catch(err){
        console.log(err)
        if(err.code===11000){
            console.log('User Already Exists')
        }
        res.redirect('/error')
    }
}