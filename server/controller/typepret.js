const express =require('express');
const typeprets = require('../models/typeprets');
var router = express.Router();

const  Typeprets =require('../models/typeprets');


async function insert (typeprets){
    console.log('saving typeprets to db ',typeprets);
    return await new Typeprets (typeprets).save();
}


module.exports={insert}