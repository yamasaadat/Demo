const utils = require('../../utils/utils.js');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('tm-appsec-demo.db');

const users = require('./users.js');

exports.initDB = () => {
    db.serialize(function () {
        db.run("CREATE TABLE IF NOT EXISTS tblBTC (epoch_timestamp TIMESTAMP primary key, date_time TEXT, currency_code TEXT, current_price TEXT, exchange_code TEXT);");

        db.run("CREATE TABLE IF NOT EXISTS tblLTC (epoch_timestamp TIMESTAMP primary key, date_time TEXT, currency_code TEXT, current_price TEXT, exchange_code TEXT);");

        db.run("CREATE TABLE IF NOT EXISTS tblETH (epoch_timestamp TIMESTAMP primary key, date_time TEXT, currency_code TEXT, current_price TEXT, exchange_code TEXT);");

        db.run("CREATE TABLE IF NOT EXISTS tblXRP (epoch_timestamp TIMESTAMP primary key, date_time TEXT, currency_code TEXT, current_price TEXT, exchange_code TEXT);");

        db.run("CREATE TABLE IF NOT EXISTS tblUsers (epoch_timestamp TIMESTAMP, date_time TEXT, user_uuid TEXT primary key, user_name TEXT, user_pass TEXT, user_city TEXT);");

        console.log("Users Init - " + users.getAllUsers());
    });
};

exports.addBtcRecord = (epoch_timestamp, currency_code, current_price, exchange_code) => {
    db.serialize(function () {
        db.run("INSERT INTO tblBTC (epoch_timestamp, date_time, currency_code, current_price, exchange_code) VALUES (?,?,?,?,?)", [
            epoch_timestamp, utils.todayAsDDMMYYYY(epoch_timestamp), currency_code, current_price, exchange_code
        ]);
    });
};

exports.addEthRecord = (epoch_timestamp, currency_code, current_price, exchange_code) => {
    db.serialize(function () {
        db.run("INSERT INTO tblETH (epoch_timestamp, date_time, currency_code, current_price, exchange_code) VALUES (?,?,?,?,?)", [
            epoch_timestamp, utils.todayAsDDMMYYYY(epoch_timestamp), currency_code, current_price, exchange_code
        ]);
    });
};

exports.addXrpRecord = (epoch_timestamp, currency_code, current_price, exchange_code) => {
    db.serialize(function () {
        db.run("INSERT INTO tblXRP (epoch_timestamp, date_time, currency_code, current_price, exchange_code) VALUES (?,?,?,?,?)", [
            epoch_timestamp, utils.todayAsDDMMYYYY(epoch_timestamp), currency_code, current_price, exchange_code
        ]);
    });
};

//Get All LTC Records By USD and Exchange Codes
exports.getAllLtcUsdRecords = () => {
    db.serialize(function () {
        db.all("SELECT DISTINCT current_price, date_time, currency_code, exchange_code FROM tblLTC WHERE currency_code = 'USD' ORDER BY epoch_timestamp DESC LIMIT 5;", [], (err, rows) => {
            if (err) {
                console.log(JSON.stringify(err));
                throw err;
            }
            rows.forEach((row) => {
                // console.log(row);
                console.log(row.epoch_timestamp + " - " + row.date_time + " - " + row.currency_code + " - " + row.current_price + " - " + row.exchange_code);
            });
        });
    });
};

//Get All ETH Records By USD and Exchange Codes
exports.getAllEthUsdRecords = () => {
    db.serialize(function () {
        db.all("SELECT DISTINCT current_price, date_time, currency_code, exchange_code FROM tblETH WHERE currency_code = 'USD' ORDER BY epoch_timestamp DESC LIMIT 5;", [], (err, rows) => {
            if (err) {
                console.log(JSON.stringify(err));
                throw err;
            }
            rows.forEach((row) => {
                // console.log(row);
                console.log(row.epoch_timestamp + " - " + row.date_time + " - " + row.currency_code + " - " + row.current_price + " - " + row.exchange_code);
            });
        });
    });
};

//Delete Cryptocurrency Records By Timestamp and USD
exports.deleteBtcUsdRecord = (epoch_timestamp) => {
    db.serialize(function () {
        db.run("DELETE FROM tblBTC WHERE currency_code = 'USD' AND epoch_timestamp = ?;", epoch_timestamp);
    });
};

exports.deleteLtcUsdRecord = (epoch_timestamp) => {
    db.serialize(function () {
        db.run("DELETE FROM tblLTC WHERE currency_code = 'USD' AND epoch_timestamp = ?;", epoch_timestamp);
    });
};

exports.deleteEthUsdRecord = (epoch_timestamp) => {
    db.serialize(function () {
        db.run("DELETE FROM tblETH WHERE currency_code = 'USD' AND epoch_timestamp = ?;", epoch_timestamp);
    });
};

exports.deleteXrpUsdRecord = (epoch_timestamp) => {
    db.serialize(function () {
        db.run("DELETE FROM tblXRP WHERE currency_code = 'USD' AND epoch_timestamp = ?;", epoch_timestamp);
    });
};

exports.combinedBtcUsdRecordsForGraph = () => {
    db.serialize(function () {
        db.all("SELECT DISTINCT current_price, date_time FROM tblBTC WHERE currency_code = 'USD' AND (exchange_code = 'CB' OR exchange_code = 'CD') ORDER BY epoch_timestamp DESC LIMIT 10;", [], (err, rows) => {
            if (err) {
                console.log(JSON.stringify(err));
                throw err;
            }
            rows.forEach((row) => {
                // console.log(row);
                console.log(row.epoch_timestamp + " - " + row.date_time + " - " + row.currency_code + " - " + row.current_price + " - " + row.exchange_code);
            });
        });
    });
};