const mongoose = require('mongoose');
var config = require('../config/db/');

const userModel = mongoose.model('Subject');

const errorLog = require('../logger/logger').errorlog;
const successlog = require('../logger/logger').successlog;

class SubjectController {

    createSubject(req, resp) {

        if (req.body && req.body.name && req.body.userId) {
            var users = new userModel();
            users.name = req.body.name;
            users.userId = req.body.userId;
            users.save((err, doc) => {
                if (!err) {
                    successlog.info(`addUser fucntion  and variables: ${doc}`);
                    resp.status(200).json({ status: true, data: doc, msg: "Data stored" }).end();
                } else {
                    errorLog.error(`addUser fucntion Message : ${err}`);
                    resp.status(400).json({ status: false, msg: "Data Not Stored" }).end();
                }
            });
        } else {
            resp.status(400).json({ status: false, msg: "Error In data parse" }).end();
        }
    }

    getSubject(req, resp){

        userModel.find({}).populate("users").exec().then(function (dbProduct) {
            successlog.info(`getUser fucntion and variables: ${dbProduct}`);
            resp.status(200).json({ data: dbProduct }).end();
           
        }).catch(function (err) {
                // If an error occurred, send it to the client
               console.log(err);
            })

        // userModel.find((err, doc) => {
        //     if (!err) {

        //         successlog.info(`getUser fucntion and variables: ${doc}`);
        //         resp.status(200).json({ data: doc }).end();
        //     } else {
        //         errorLog.error(`getUser fucntion  : ${err}`);
        //         resp.status(400).json({ status: false, msg: "Data Not Stored" }).end();
        //         resp.send('Error');
        //     }
        // })
    }
}

module.exports = new SubjectController();