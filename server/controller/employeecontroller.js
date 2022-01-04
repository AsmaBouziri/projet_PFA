const express =require('express');
const employee = require('../models/employee');
var router = express.Router();

const  Employee =require('../models/employee');
 Employees=[]

async function insert (employee){
    console.log('saving employee to db ',employee);
    return await new Employee (employee).save();
 
}

/*
exports.findOne = (req,res) => {
    const id =req.parms.id;

    employee.findById(id)
    .then (data =>
        {
            if (!data)
                res.status(404).send ({ message :"not foud emp with "+id});
            else res.send(data);
        })
    .catch (err =>{
        res.status(500)
           .send ({ message :"erreur"}) 
    })
}

exports.update = (req,res) => {
    if(!req.body){
        return res.status(400).send({
            message :"empety data"
        });
    }

    const id =req.parms.id;

    employee.findByIdAndUpdate(id, req.body )
    .then (data => {
        if (!data) {
            res.status(404).send ({
                message :`cannot update emp with id=${id}`
            });
        }else res.send ({ message :"updated emp" 
    });


    })
    .catch (err =>{
        res.status(500)
           .send ({ message :"erreur"}) 
    })
}
*/

module.exports={insert}