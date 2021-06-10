//Video Streaming App
const express=require('express')
const app=express()
const mongoose=require('mongoose').set("debug", true)
const dotenv=require('dotenv')
const session=require('express-session')
const cookieParser=require('cookie-parser')
const flash=require('connect-flash')
dotenv.config()
//Database 
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('Connected To Database')
}).catch((err)=>{
    console.log('Error Happened')
    console.log(err)
})

app.set("view engine", "ejs")
//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(flash())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.sessionSecret
}))
//Custom middleware
// ( ...arg, next() )=>{}
app.use(function(req, res, next){
    if(req.session.isLoggedIn){
        res.locals.currentUser=req.session.user;
    }else {
        res.locals.currentUser = null;
    }
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
})
app.use('/public', express.static('public'))
//Routes
const authRoutes=require('./routes/auth')
const userRoutes=require('./routes/user')
const videoRoutes=require('./routes/video')
const landingRoutes=require('./routes/landing')
app.get('/',landingRoutes)
app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/video', videoRoutes)

app.get('/error', (req, res) => {
    try {
        res.render('error')    
    } catch (error) {
        console.error(error);
    }
})

app.get('*', (req, res)=>{
    res.send('Some Error')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server has started at port ${process.env.PORT}`)
})
