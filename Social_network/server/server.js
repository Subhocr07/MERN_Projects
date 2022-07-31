const express=require("express");
const mongoose =require ("mongoose");
const{MONGOURI}=require("./keys");
const userModel = require("./models/userSchema");
const  authRoutes=require("./auth");
const app=express();
const PORT=7000;



///////////////////middlewares//////////////////
app.use(authRoutes);



///////////server setup////////////////

app.listen(PORT,(err)=>{
    if(!err){
        console.log(`Server started at ${PORT}`)
    }else{
        console.log(err)
    }
});

//////////////Data base connection//////////////////

mongoose.connect(MONGOURI,(err)=>{
    if(!err){
        console.log(`connected to Mongo Yoo`)
    }else{
        console.log(err)
    }
});



///////////////Base Route/////////////////////////

app.get ("/",(req,res)=>{
    res.send("YOO! You have succesfully started your backend Server ")
});

