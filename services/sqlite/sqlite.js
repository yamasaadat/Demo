const utils = require('../../utils/utils.js');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('tm-appsec-demo.db');

const users = require('./users.js');

exports.initDB = () => {
    db.serialize(function () {
        
        db.run("CREATE TABLE IF NOT EXISTS tblUsers (epoch_timestamp TIMESTAMP, date_time TEXT, user_uuid TEXT primary key, user_name TEXT, user_pass TEXT, user_city TEXT);");

        console.log("Users Init - " + users.getAllUsers());
    });
};