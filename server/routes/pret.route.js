const express = require('express');
const asyncHandler =require('express-async-handler');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const pret =require('../models/pret');
const pretcontoller =require('../controller/pretcontroller'); 
const detailsp =require('../models/deailp');

// insert new pret
router.post('/insert',asyncHandler(insert));

async function insert(req,res,next){
    const pret =req.body;
    console.log('registering pret', pret);
    const savedpret =await  pretcontoller.insert(pret);
    res.json(savedpret);
}

//get prets
router.get('/getprets', (req,res) => {
    pret.find((err,docs)=>{
        if(!err) {res.send(docs);}
        else {console.log('error');}
    });
});

//get pret by id
router.get('/get/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    pret.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

//get details pret
router.get('/get/:numpret', (req, res) => {
    //if (!ObjectId.isValid(req.params.utilisateur))
       // return res.status(400).send(`No record with given id : ${req.params.utilisateur}`);
        console.log(req.params.numpret);

        detailsp.find({numpret:req.params.numpret}, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving user :' + JSON.stringify(err, undefined, 2)); }
    });
});
//delete
router.delete('/:_id', (req,res)=>{
    console.log("Delete pret")
    pret.findByIdAndRemove(req.params._id, function(err,deleted){
    if (err){
        res.send("Error")
    }
    else
    res.json(deleted)
    })
})

module.exports = router;