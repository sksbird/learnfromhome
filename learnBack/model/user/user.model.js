const mongoose = require('mongoose');
const config = require('../../config/db');

var UserSchema = new mongoose.Schema({
    userName : {
        type: String,
        required:"Required"
    },
    userId : {
        type : String,
        required: "Required"
    },
    password : {
        type : String,
        required: "Required"
    },
    role:{
        type : String,
        required:"Required"
    }
});

mongoose.model("Users",UserSchema);