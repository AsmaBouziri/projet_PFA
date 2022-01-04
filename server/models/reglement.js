const mongoose =require('mongoose');

const reglementSchema = new mongoose.Schema({
    numrecu :{ type : String },
    numech : { type : String },
    numpret : { type : String },
    daterecu :{ type : String },
    matsal :{ type : String },
    intsal :{ type : String },
    montant :{ type : String },
    echeance :{ type : String },
    modep :{ type : String },
    typedep :{ type : JSON },
});

module.exports = mongoose.model('reglement',reglementSchema);