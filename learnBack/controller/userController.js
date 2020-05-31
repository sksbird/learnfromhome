const mongoose = require('mongoose');
var config = require('../config/db/');

const userModel = mongoose.model('Users');
const errorLog = require('../logger/logger').errorlog;
const successlog = require('../logger/logger').successlog;

class UserController {

    addUser(req, resp) {

        if (req.body && req.body.userId && req.body.userName && req.body.password && req.body.role) {
            var users = new userModel();
            users.userName = req.body.userName;
            users.userId = req.body.userId;
            users.password = req.body.password;
            users.role = req.body.role;
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

    getUser(req, resp) {

        userModel.find((err, doc) => {
            if (!err) {

                successlog.info(`getUser fucntion and variables: ${doc}`);
                resp.status(200).json({ data: doc }).end();
            } else {
                errorLog.error(`getUser fucntion  : ${err}`);
                resp.status(400).json({ status: false, msg: "Data Not Stored" }).end();
                resp.send('Error');
            }
        })

    }

    updateUser(req, resp) {

        const _id = req.params.id;

        userModel.findOneAndUpdate({ _id }, req.body, { new: true }, (err, docs) => {
            if (err) {
                res.status(400).json(err);
            }
            resp.status(200).json({ data: docs }).end();

        });
    }

    deleteUser(req, resp) {
        const _id = req.params.id;

        userModel.findOneAndRemove({ _id }, (err, doc) => {
            if (err) {
                resp.status(400).json(err);
            }
            if (!doc) {
                resp.status(404).json({ message: 'User not found.' });
            }
            resp.json({ message: `User ${doc._id} deleted.` });
        });
    }

}

module.exports = new UserController();