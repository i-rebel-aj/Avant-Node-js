exports.isLoggedIn=async (req, res, next)=>{
    try{
        if(req?.session?.isLoggedIn){
            next()
        }else{
            req.flash("error", "You need to be logged in to do that")
            res.redirect("/auth/login")
        }
    }catch(err){
        console.log(err)
    }
}