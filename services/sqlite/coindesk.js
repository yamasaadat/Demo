const utils = require('../../utils/utils.js');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('tm-appsec-demo.db');

exports.cdGetAllBtcUsdRecords = () => {
    db.serialize(function () {
        db.all("SELECT DISTINCT current_price, date_time, exchange_code FROM tblBTC WHERE currency_code = 'USD' AND exchange_code = 'CD' ORDER BY epoch_timestamp DESC LIMIT 5;", [], (err, rows) => {
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

exports.cdGetDayHighBtcUsdRecords = () => {
    db.serialize(function () {
        db.all("SELECT max(current_price) FROM tblBTC WHERE currency_code = 'USD' AND exchange_code = 'CD' AND date_time = ?;", utils.todayAsDDMMYYYY(), (err, rows) => {
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

exports.cdGetDayLowBtcUsdRecords = () => {
    db.serialize(function () {
        db.all("SELECT min(current_price) FROM tblBTC WHERE currency_code = 'USD' AND exchange_code = 'CD' AND date_time = ?;", utils.todayAsDDMMYYYY(), (err, rows) => {
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

exports.cdGetLastTwoBtcUsdRecords = () => {
    db.serialize(function () {
        db.all("SELECT DISTINCT current_price FROM tblBTC WHERE currency_code = 'USD' AND exchange_code = 'CD' ORDER BY epoch_timestamp DESC LIMIT 2;", [], (err, rows) => {
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

exports.cdGetBtcUsdRecordsForGraph = () => {
    db.serialize(function () {
        db.all("SELECT DISTINCT current_price, date_time FROM tblBTC WHERE currency_code = 'USD' AND exchange_code = 'CD' ORDER BY epoch_timestamp DESC LIMIT 5;", [], (err, rows) => {
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

exports.cdGetBtcUsdDayRecordsForGraph = () => {
    db.serialize(function () {
        db.all("SELECT DISTINCT current_price, date_time FROM tblBTC WHERE currency_code = 'USD' AND exchange_code = 'CD' AND date_time = '" + utils.todayAsDDMMYYYY() + "' ORDER BY epoch_timestamp;", [], (err, rows) => {
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