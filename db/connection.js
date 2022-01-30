const mysql = require("mysql2");
const { user, password } = require('../creds');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    user: user,
    password: password,
    database: 'election'
});

module.exports = db;