const utils = require('../../utils/utils.js');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('tm-appsec-demo.db');

exports.cbGetAllBtcUsdRecords = () => {
    db.serialize(function () {
        db.all("SELECT DISTINCT current_price, date_time, currency_code, exchange_code FROM tblBTC WHERE currency_code = 'USD' AND exchange_code = 'CB' ORDER BY epoch_timestamp DESC LIMIT 5;", [], (err, rows) => {
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

exports.cbGetDayHighBtcUsdRecords = () => {
    db.serialize(function () {
        db.all("SELECT max(current_price) FROM tblBTC WHERE currency_code = 'USD' AND exchange_code = 'CB' AND date_time = ?;", utils.todayAsDDMMYYYY(), (err, rows) => {
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

exports.cbGetDayLowBtcUsdRecords = () => {
    db.serialize(function () {
        db.all("SELECT min(current_price) FROM tblBTC WHERE currency_code = 'USD' AND exchange_code = 'CB' AND date_time = ?;", utils.todayAsDDMMYYYY(), (err, rows) => {
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

exports.cbGetLastTwoBtcUsdRecords = () => {
    db.serialize(function () {
        db.all("SELECT DISTINCT current_price FROM tblBTC WHERE currency_code = 'USD' AND exchange_code = 'CB' ORDER BY epoch_timestamp DESC LIMIT 2;", [], (err, rows) => {
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

exports.cbGetBtcUsdRecordsForGraph = () => {
    db.serialize(function () {
        db.all("SELECT DISTINCT current_price, date_time FROM tblBTC WHERE currency_code = 'USD' AND exchange_code = 'CB' ORDER BY epoch_timestamp DESC LIMIT 5;", [], (err, rows) => {
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

exports.cbGetBtcUsdDayRecordsForGraph = () => {
    db.serialize(function () {
        db.all("SELECT DISTINCT current_price, date_time FROM tblBTC WHERE currency_code = 'USD' AND exchange_code = 'CB' AND date_time = '" + utils.todayAsDDMMYYYY() + "' ORDER BY epoch_timestamp;", [], (err, rows) => {
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