// import connection.js to connect to database for inquiries
var connection = require('./connection.js');

// create orm object containing all inquiries
var orm = {
    // retrieve all items in table burgers
    showAllBurgers: function(table, cb){
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString,[table], function(err, result){
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
}

// export for use in other modules
module.exports = orm;
console.log('2');