const express = require('express');
const asyncHandler =require('express-async-handler');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const detailspretcontoller =require('../controller/deatilspret'); 
const detailsp =require('../models/deailp');

// insert new deatilspret
router.post('/insert',asyncHandler(insert));

async function insert(req,res,next){
    const detailspret =req.body;
    console.log('registering detailspret', detailspret);
    const savedpret =await  detailspretcontoller.insert(detailspret);
    res.json(savedpret);
}

//get details prets
router.get('/getdetails', (req,res) => {
    detailsp.find((err,docs)=>{
        if(!err) {res.send(docs);}
        else {console.log('error');}
    });
});

//get by numpret
router.get('/get/:numpret', (req, res) => {
    //if (!ObjectId.isValid(req.params.utilisateur))
       // return res.status(400).send(`No record with given id : ${req.params.utilisateur}`);
        console.log(req.params.utilisateur);

        detailsp.find({numpret:req.params.numpret,etat:0}, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving user :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/getpayer/:numpret', (req, res) => {
    //if (!ObjectId.isValid(req.params.utilisateur))
       // return res.status(400).send(`No record with given id : ${req.params.utilisateur}`);
        console.log(req.params.utilisateur);

        detailsp.find({numpret:req.params.numpret,etat:1}, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving user :' + JSON.stringify(err, undefined, 2)); }
    });
});


//update
router.put('/:id', function(req, res, next) {
    detailsp.findByIdAndUpdate(req.params.id, req.body, function (err, detailsp) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(detailsp);
    });
});

//get details 
router.get('/getdet/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        detailsp.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;