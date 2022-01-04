const express =require('express');
var router = express.Router();

const Reglement = require('../models/reglement')

async function insert (reglement){
    console.log('saving reglement to db ',reglement);
    return await new Reglement (reglement).save();
}


module.exports={insert}