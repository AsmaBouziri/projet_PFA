const express =require('express');
const { from } = require('rxjs');
var router = express.Router();


const Utilisateur = require('../models/utilisateur')
utilisateurs=[];

async function insert (utilisateur){
    console.log('saving utilisateur to db ',utilisateur);
    return await new Utilisateur (utilisateur).save();
}


module.exports={
    insert 
};