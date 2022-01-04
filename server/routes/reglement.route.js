const express = require('express');
const asyncHandler =require('express-async-handler');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const reglement =require('../models/reglement');
const reglementcontoller =require('../controller/reglement'); 

// insert new reglement
router.post('/insert',asyncHandler(insert));

async function insert(req,res,next){
    const reglement =req.body;
    console.log('registering reglement', reglement);
    const savedreglement =await  reglementcontoller.insert(reglement);
    res.json(savedreglement);
}

//get reglements
router.get('/get', (req,res) => {
    reglement.find((err,docs)=>{
        if(!err) {res.send(docs);}
        else {console.log('error');}
    });
});

//get reglement by id
router.get('/get/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        reglement.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

//delete
router.delete('/:_id', (req,res)=>{
    console.log("Delete reglement")
    reglement.findByIdAndRemove(req.params._id,function(err,deleted){
    if (err){
        res.send("Error")
    }
    else
    res.json(deleted)
    })
})

module.exports = router;