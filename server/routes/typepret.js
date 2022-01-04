const express = require('express');
const asyncHandler =require('express-async-handler');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const typepret =require('../models/typeprets');
const typepretcontoller =require('../controller/typepret'); 


// insert new pret
router.post('/insert',asyncHandler(insert));

async function insert(req,res,next){
    const typepret =req.body;
    console.log('registering typepret', typepret);
    const savedpret =await  typepretcontoller.insert(typepret);
    res.json(savedpret);
}

module.exports = router;
