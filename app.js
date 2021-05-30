//Video Streaming App
const express=require('express')
const app=express()

app.set("view engine", "ejs")


app.get('/',(req, res)=>{
    //res.send('Hello From Akswich')
    try{
        res.render('./home')
    }catch(err){
        console.log(err)
    }   
})
app.get('/user', (req, res)=>{
    res.send('User Details')
})
app.get('/user/:id', (req, res)=>{
    res.send('Usser By Id')
})
app.get('/video/:videoId', (req, res)=>{
    console.log(req.params)
    res.send(`This is some video by it\'s id ${req.params.videoId}`)
})
app.listen(3000, ()=>{
    console.log(`Server has started`)
})