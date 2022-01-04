const express = require('express');
const employeecontoller =require('../controller/employeecontroller');
const asyncHandler =require('express-async-handler');
var ObjectId = require('mongoose').Types.ObjectId;

const router = express.Router();
const employee =require('../models/employee');


// insert new employee
router.post('/insert',asyncHandler(insert));

async function insert(req,res,next){
    const employee =req.body;
    console.log('registering employee', employee);
    const savedemployee =await  employeecontoller.insert(employee);
    res.json(savedemployee);
}

//get employees
router.get('/get', (req,res) => {
    employee.find((err,docs)=>{
        if(!err) {res.send(docs);}
        else {console.log('error');}
    });
});


//update employee
/*
router.put('/:id', (req,res)=>{
    if(!isValidObjectId(req.params.id))
        return res.status(400).send(`no record with given id : ${req.parms.id}`);

    var emp ={
        matsal :req.body.matsal,
        intsal :req.body.intsal,
        adresse :req.body.adresse,
        ntelephone :req.body.ntelephone,
        email :req.body.email,
        Cin :req.body.Cin
    };
    employee.findByIdAndUpdate(req.params.id, {$set:emp}, {new :true},(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log ('erreur employee update :' +JSON.stringify(err,undefined,2));}
    });
});
*/
router.put('/:id', function(req, res, next) {
    employee.findByIdAndUpdate(req.params.id, req.body, function (err, employee) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(employee);
    });
});
/*
router.put (":id", employee.update);
*/
//get employee
router.get('/get/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});



//delete
router.delete('/:_id', (req,res)=>{
    console.log("Delete Salarie")
    employee.findByIdAndRemove(req.params._id,function(err,deleted){
    if (err){
        res.send("Error")
    }
    else
    res.json(deleted)
    })
})


module.exports = router;
