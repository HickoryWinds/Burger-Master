// import mysql
var mysql = require('mysql');

// create object for connecting
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});
};

// start connection
connection.connect(function(err){
    if (err){
        console.log('error connecting: ' + err)
        return;
    }
    console.log('connection.js-1')
    console.log('connected as id ' + connection.threadId);
});

// export to be used in other modules
module.exports = connection;
console.log('1');