const mongoose=require('mongoose')
mongoose.connect('<URL>', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('Connected To Database')
}).catch((err)=>{
    console.log('Error Happened')
    console.log(err)
})
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

const insertToDB=async ()=>{
    try{
        await user.insertMany([{
            email: 'akshay@gmail.com', password:'akshay', type:'admin'
        },{
            email: 'amitesh@gmail.com', password:'amitesh', type:'user'
        },{
            email: 'yatn@gmail.com', password:'yatn', type:'user'
        },{
            email: 'ayush@gmail.com', password:'ayush', type:'admin'
        }])
        console.log('Insert Success')
    }catch(err){
        console.log(err)
    }
}
insertToDB()


// //Functions
// function add( a, b){
//     return a+b
// }
// //ES-6 Syntax
// const add=async ()=>{

// }
// add()
