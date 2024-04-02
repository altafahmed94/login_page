const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://admin:gaandmaarao@cluster0.zbwtacs.mongodb.net/LoginFormPractice")
// mongodb+srv://admin:gaandmaarao@cluster0.zbwtacs.mongodb.net/project2
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection =new mongoose.model('collection1',logInSchema)

module.exports= collection ;