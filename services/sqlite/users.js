const shortid = require('shortid');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('tm-appsec-demo.db');

const utils = require('../../utils/utils.js');

exports.getUser = (user_uuid) => {
    db.serialize(function () {
        db.all("SELECT epoch_timestamp, date_time, user_uuid, user_name, user_city FROM tblUsers WHERE user_uuid = ?;", user_uuid, (err, rows) => {
            if (err) {
                console.log("Error: " + JSON.stringify(err));
                throw err;
            }
            rows.forEach((row) => {
                // console.log(row);
                console.log("Result - " + row.epoch_timestamp + " - " + row.date_time + " - " + row.user_uuid + " - " + row.user_name + " - " + row.user_pass + " - " + row.user_city);
            });
        });
    });
};

exports.postUser = (epoch_timestamp, user_name, user_pass, user_city) => {
    db.serialize(function () {
        console.log(epoch_timestamp, user_name, user_pass, user_city);
        db.run("INSERT INTO tblUsers (epoch_timestamp, date_time, user_uuid, user_name, user_pass, user_city) VALUES (?,?,?,?,?,?)", [
            epoch_timestamp, utils.todayAsDDMMYYYY(epoch_timestamp), shortid.generate(), user_name, user_pass, user_city
        ]);
        console.log("End");

        db.all("SELECT epoch_timestamp, date_time, user_uuid, user_name, user_pass, user_city FROM tblUsers", [], (err, rows) => {
            if (err) {
                console.log("Error: " + JSON.stringify(err));
                throw err;
            }
            rows.forEach((row) => {
                // console.log(row);
                console.log("Result - " + row.epoch_timestamp + " - " + row.date_time + " - " + row.user_uuid + " - " + row.user_name + " - " + row.user_pass + " - " + row.user_city);
            });
        });
    });
};

exports.getAllUsers = () => {
    db.serialize(function () {
        db.all("SELECT epoch_timestamp, date_time, user_uuid, user_name, user_city FROM tblUsers", [], (err, rows) => {
            if (err) {
                console.log("Error: " + JSON.stringify(err));
                throw err;
            }
            rows.forEach((row) => {
                // console.log(row);
                console.log("Result - " + row.epoch_timestamp + " - " + row.date_time + " - " + row.user_uuid + " - " + row.user_name + " - " + row.user_city);
            });
        });
    });
};

exports.checkUser = (user_name, user_pass) => {
    db.serialize(function () {
        db.all("SELECT user_uuid FROM tblUsers WHERE user_name = ?;", user_name, (err, rows) => {
            if (err) {
                console.log("Error: " + JSON.stringify(err));
                throw err;
            }
            if (rows !== undefined) {
                rows.forEach((row) => {
                    // console.log(row);
                    console.log("Result - " + row.user_uuid);
                    return true;
                });
            }
            return false; 
        });
        // and user_pass = ? //, user_pass
    });
    // console.log("Login Status - " + login);
    // return login;
};

exports.checkID = (user_uuid) => {
    var user_name = 'nobody';
    db.serialize(function () {
        db.all("SELECT user_name FROM tblUsers WHERE user_uuid = ?;", user_uuid, (err, rows) => {
            if (err) {
                console.log("Error: " + JSON.stringify(err));
                throw err;
            }
            if (rows !== undefined) {
                rows.forEach((row) => {
                    console.log(row);
                    console.log("Result - " + row.user_name);
                    user_name = row.user_name;
                });
                return user_name;
            }
        });
        // and user_pass = ? //, user_pass
    });

    // console.log("Login Status - " + login);
    // return login;
};