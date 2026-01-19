const express = require('express');
const route=express.Router();
const {generateShortUrl,urlAnalytics}=require('../controller/url');
route.post('/',generateShortUrl);
route.get('/analytics/:shortId',urlAnalytics);
module.exports=route;