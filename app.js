//Video Streaming App
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
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
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Routes
app.get('/',(req, res)=>{
    //res.send('Hello From Akswich')
    try{
        res.render('./landing/home')
    }catch(err){
        console.log(err)
    }   
})
app.get('/signup', (req, res)=>{
    try{
        res.render('signup')
    }catch(err){
        console.log(err)
    }
})
app.post('/user', async (req, res)=>{
    try{
        console.log(req.body)
        res.redirect('/')
    }catch(err){
        console.log(err)
        res.redirect('/error')
    }
})
app.get('*', (req, res)=>{
    res.send('Some Error')
})

// app.get('/user', (req, res)=>{
//     res.send('User Details')
// })
// app.get('/user/:id', (req, res)=>{
//     res.send('Usser By Id')
// })
// app.get('/video/:videoId', (req, res)=>{
//     console.log(req.params)
//     res.send(`This is some video by it\'s id ${req.params.videoId}`)
// })
app.listen(process.env.PORT, ()=>{
    console.log(`Server has started at port ${process.env.PORT}`)
})