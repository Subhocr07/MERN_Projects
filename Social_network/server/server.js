const express=require("express");
const mongoose =require ("mongoose");
const{MONGOURI}=require("./keys");
const app=express();
const PORT=7000;



///////////server setup////////////////

app.listen(PORT,(err)=>{
    if(!err){
        console.log(`Server started at ${PORT}`)
    }else{
        console.log(err)
    }
});

//////////////Data bese connection//////////////////

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
})