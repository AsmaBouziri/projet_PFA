const mongoose =require('mongoose');

const DetailpretSchema = new mongoose.Schema({
    numrecu: { type : String },
    numpret :{ type : String },
    typepret :{ type : String },
    date :{ type : String },
    matsal :{ type : String },
    montantp :{ type : String },
    nbrech :{ type : String },
    dated :{ type : String },
    modepay :{ type : String },
    etat :{type : String}
});

module.exports = mongoose.model('pretdetail',DetailpretSchema);