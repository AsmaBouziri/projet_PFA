const mongoose =require('mongoose');

const PretSchema = new mongoose.Schema({
    numpret :{ type : String },
    typepret :{ type : String },
    date :{ type : String },
    matsal :{ type : String },
    montantp :{ type : String },
    nbrech :{ type : String },
    dated :{ type : String },
    etat :{ type : String } 
});

module.exports = mongoose.model('pret',PretSchema);