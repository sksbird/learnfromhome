const mongoose = require('mongoose');
var config = require('../config/db/');

const userModel = mongoose.model('Users');
const errorLog = require('../logger/logger').errorlog;
const successlog = require('../logger/logger').successlog;

class LoginController{

    login(req,res){

        if (req.body && req.body.user && req.body.password && req.body.password) {

            res.status(200).json({ status: true, msg: req.body }).end();
        } else {
            res.status(400).json({ status: false, msg: "Error In data parse" }).end();
        }

    }
    
}

module.exports = new LoginController();