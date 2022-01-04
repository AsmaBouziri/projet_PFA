const express =require('express');
const pret = require('../models/pret');
var router = express.Router();

const  Pret =require('../models/pret');
 Prets=[]

async function insert (pret){
    console.log('saving pret to db ',pret);
    return await new Pret (pret).save();
}


module.exports={insert}