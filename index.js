const {connectMongoDb}=require('./connection/connectDb');
require('dotenv').config();
const {Url}=require('./model/url');
const express=require('express');
const urlRoute=require('./routes/url');
const app=express();
app.use(express.json());
connectMongoDb( process.env.MONGO_URI);
const port=process.env.PORT || 8000;
app.use('/url',urlRoute);
app.get('/:shortId',async(req,res)=>{
    const shortId=req.params.shortId;
    const entry=await Url.findOneAndUpdate({
        shortId,
    },
     {
        $push:{visitHistory:{timestamp:Date.now()}}
     })
     if(!entry){
        return res.status(404).json({message:"URL not found"});
     }
     return res.redirect(entry.redirectUrl);
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})