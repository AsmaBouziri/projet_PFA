const express =require('express');
var router = express.Router();

const  Detailspret =require('../models/deailp');
datailsprets=[]

async function insert (datailspret){
    console.log('saving datailspret to db ',datailspret);
    return await new Detailspret (datailspret).save();
}


module.exports={insert}

