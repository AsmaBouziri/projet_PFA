const mongoose =require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    matsal :{ type : String },
    intsal :{ type : String },
    adresse :{ type : String },
    ntelephone :{ type : String },
    email :{ type : String },
    Cin :{ type : String }
});

/*
var employee= mongoose.model('employee',{
    matriculesalarié :{ type : String },
    Intitulésalarié :{ type : String },
    adresse :{ type : String },
    telephone :{ type : String },
    email :{ type : String },
    cin :{ type : String }
});
*/

module.exports = mongoose.model('employee',EmployeeSchema);