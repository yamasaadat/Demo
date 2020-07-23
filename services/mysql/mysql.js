const mysql = require('mysql');
const { response } = require('express');

// const connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'tm_db_user',
//     password : 'tm_db_pass',
//     database : 'tm_appsec_demo'
// });

var pool  = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'tm_db_user',
    password : 'tm_db_pass',
    database : 'tm_appsec_demo'
  });

exports.initDB = () => {
    // connection.connect();

    pool.query('CREATE TABLE IF NOT EXISTS tbl_user_entries(id INT AUTO_INCREMENT PRIMARY KEY, user_name VARCHAR(50), user_pass VARCHAR(50), user_entries VARCHAR(255), entry_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP);', function (error, results, fields) {
        if (error) throw error;
        console.log('SQLResult: ', results);
    });
    
    // connection.end();
}

exports.getUser = (id) => {
    // connection.connect();

    pool.query('SELECT user_name FROM tbl_user_entries WHERE id = ' + id + ';', function(error, results, fields) {
        if (error) throw error;
        console.log('SQLResult: ', results);
    });

    // connection.end();
}

exports.getAllUsers = () => {
    // connection.connect();

    pool.query('SELECT user_name FROM tbl_user_entries;', function(error, results, fields) {
        if (error) throw error;
        console.log('SQLResult: ', results);
    });

    // connection.end();
}

exports.postUserEntry = (user_entries, entry_timestamp) => {
    // connection.connect();

    pool.query('INSERT INTO tbl_user_entries(user_entries, entry_timestamp) VALUES (' + user_entries + ', "' + entry_timestamp + '");', function(error, results, fields) {
        if (error) throw error;
        console.log('SQLResult: ', results);
    });

    // connection.end();
}

exports.postUser = (user_name, user_pass) => {
    // connection.connect();

    pool.query('INSERT INTO tbl_user_entries(user_name, user_pass) VALUES (' + user_name + ',  PASSWORD("' + user_pass + '"));', function(error, results, fields) {
        if (error) throw error;
        console.log('SQLResult: ', results);
    });

    // connection.end();
}

exports.checkUser = (user_name, user_pass) => {
    // connection.connect();
    
    pool.query('SELECT user_name FROM tbl_user_entries WHERE user_name = ' + user_name + ' AND user_pass = PASSWORD("' + user_pass + '");', function(error, results) {
        if (error) throw error;
        console.log('SQLResult: ', results);
    });

    // connection.end();
}

exports.checkId = (id) => {
    // connection.connect();

    pool.query('SELECT user_name FROM tbl_user_entries WHERE id = ' + id + ';', function(error, results, fields) {
        if (error) throw error;
        console.log('SQLResult: ', results);
    });

    // connection.end();
}