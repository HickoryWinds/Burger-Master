// import connection.js to connect to database for inquiries
var connection = require('./connection.js');

// create orm object containing all inquiries
var orm = {
    // retrieve all items in table burgers
    showAllBurgers: function(table, cb){
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString,[table], function(err, result){
            if (err) {
                return result.status(500).end
            };
            cb(result);
        });
    },
    // change 'devoured' in table burgers when button clicked
    devourBurger: function(table, condition, cb){
        var queryString = 'UPDATE ' + table;
        queryString += ' SET devoured = true';
        queryString += ' WHERE ' + condition;
        connection.query(queryString, function(err, result){
            if (err) {
                return result.status(500).end
            }
            cb(result);
        })
    },
    // create new burger
    create: function (table, cols, vals, cb){
        var queryString = 'INSERT INTO ' + table;
        queryString += ' (' + cols.toString() + ') ';
        queryString += 'VALUES (?) ';

        connection.query(queryString, vals, function(err, result){
            if (err) throw err;
            cb(result);
        })
    }
}

// export for use in other modules
module.exports = orm;