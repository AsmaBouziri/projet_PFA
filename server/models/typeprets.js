const mongoose =require('mongoose');

const TypepretSchema = new mongoose.Schema({
    codepret :{ type : String },
    typepret :{ type : String },

});

module.exports = mongoose.model('typepret',TypepretSchema);