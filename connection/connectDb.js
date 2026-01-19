const express=require('express');
const mongoose=require('mongoose');
async function connectMongoDb(url){
    try{
        await mongoose.connect(url).then(()=>{
            console.log("DB connected");
        });
    }
    catch(err){
        console.log("Error in DB connection",err);
    }
}
module.exports={
    connectMongoDb,
}