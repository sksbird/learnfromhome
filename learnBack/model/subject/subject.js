const mongoose = require('mongoose');
const config = require('../../config/db');
var Schema = mongoose.Schema;

var SubSchema = new mongoose.Schema({

    name: {
        type: String,
        required: "Required"
    } , 
    userId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]

});


mongoose.model("Subject", SubSchema);