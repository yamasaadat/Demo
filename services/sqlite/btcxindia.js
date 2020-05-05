const utils = require('../../utils/utils.js');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('tm-appsec-demo.db');

exports.btcxGetAllXrpInrRecords = () => {
    db.serialize(function () {
        db.all("SELECT DISTINCT current_price, date_time, currency_code, exchange_code FROM tblXRP WHERE currency_code = 'INR' AND exchange_code = 'BTCX' ORDER BY epoch_timestamp DESC LIMIT 5;", [], (err, rows) => {
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

exports.btcxGetDayHighXrpInrRecords = () => {
    db.serialize(function () {
        db.all("SELECT max(current_price) FROM tblXRP WHERE currency_code = 'INR' AND exchange_code = 'BTCX' AND date_time = ?;", utils.todayAsDDMMYYYY(), (err, rows) => {
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

exports.btcxGetDayLowXrpInrRecords = () => {
    db.serialize(function () {
        db.all("SELECT min(current_price) FROM tblXRP WHERE currency_code = 'INR' AND exchange_code = 'BTCX' AND date_time = ?;", utils.todayAsDDMMYYYY(), (err, rows) => {
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

exports.btcxGetLastTwoXrpInrRecords = () => {
    db.serialize(function () {
        db.all("SELECT DISTINCT current_price FROM tblXRP WHERE currency_code = 'INR' AND exchange_code = 'BTCX' ORDER BY epoch_timestamp DESC LIMIT 2;", [], (err, rows) => {
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

exports.btcxGetXrpInrRecordsForGraph = () => {
    db.serialize(function () {
        db.all("SELECT DISTINCT current_price, date_time FROM tblXRP WHERE currency_code = 'INR' AND exchange_code = 'BTCX' ORDER BY epoch_timestamp DESC LIMIT 5;", [], (err, rows) => {
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

exports.btcxGetXrpInrDayRecordsForGraph = () => {
    db.serialize(function () {
        db.all("SELECT DISTINCT current_price, date_time FROM tblXRP WHERE currency_code = 'INR' AND exchange_code = 'BTCX' AND date_time = '" + utils.todayAsDDMMYYYY() + "' ORDER BY epoch_timestamp;", [], (err, rows) => {
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