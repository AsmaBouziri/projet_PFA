const mongoose =require('mongoose');

const utilisateurSchema = new mongoose.Schema({
    utilisateur :{ type : String },
    mdp :{ type : String },
});

module.exports = mongoose.model('utilisateur',utilisateurSchema);