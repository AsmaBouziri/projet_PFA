const express = require('express');
const utilisateurcontoller =require('../controller/utilisateurcontoller');
const asyncHandler =require('express-async-handler');
var ObjectId = require('mongoose').Types.ObjectId;

const router = express.Router();
const utilisateur =require('../models/utilisateur');
//const Utilisateur =require('../../src/app/utilisateur')


// insert new user
router.post('/insert',asyncHandler(insert));
//router.post('/login',asyncHandler(login));

async function insert(req,res,next){
    const utilisateur =req.body;
    console.log('registering user', utilisateur);
    const savedutilisateur =await  utilisateurcontoller.insert(utilisateur);
    res.json(savedutilisateur);
}

//get user by utilisateur
router.get('/get/:utilisateur', (req, res) => {
    //if (!ObjectId.isValid(req.params.utilisateur))
       // return res.status(400).send(`No record with given id : ${req.params.utilisateur}`);
        console.log(req.params.utilisateur);

        utilisateur.findOne({utilisateur:req.params.utilisateur}, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving user :' + JSON.stringify(err, undefined, 2)); }
    });
});


//get users
router.get('/get', (req,res) => {
    utilisateur.find((err,docs)=>{
        if(!err) {res.send(docs);}
        else {console.log('error');}
    });
});

//delete
router.delete('/:_id', (req,res)=>{
    console.log("Delete user")
    utilisateur.findByIdAndRemove(req.params._id,function(err,deleted){
    if (err){
        res.send("Error")
    }
    else
    res.json(deleted)
    })
})




module.exports = router;
