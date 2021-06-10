const {User}=require('../../models/user')
const renderLoginForm=async(req, res)=>{
    try{
        res.render('login')
    }catch(err){
        console.log(err)
    }
}
const loginUser= async (req, res)=>{
    try{
        const foundUser=await User.findOne({email: req.body.email})
        if((!foundUser)||!(foundUser.authenticate(req.body.password))){
            console.log('Invalid pass or user doesn\'t exist')
            res.redirect('/')
        }else{
            console.log('You are Logged In')
            //Establish a session
            req.session.isLoggedIn=true
            req.session.user=foundUser
            req.flash("success", "You are Logged In")
            res.redirect('/')
        }
    }catch(err){
        console.log(err)
        res.redirect('/error')
    }
}
const logout=async(req, res)=>{
    if(req.session){
        req.session.destroy((err)=>{
            if(err){
                console.log(err)
                res.redirect('/error')
            }else{
                req.session=null
                res.redirect('/')
            }
        })
    }
}
const renderSignUpPage=async(req, res)=>{
    try{
        res.render('signup')
    }catch(err){
        console.log(err)
    }
}
module.exports={renderLoginForm, loginUser, logout, renderSignUpPage}