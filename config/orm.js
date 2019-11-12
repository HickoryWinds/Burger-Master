// import connection.js to connect to database for inquiries
var connection = require('./connection.js');

function printQuestionMarks(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push('?');
    }
    return arr.toString();
}

function objToSql(ob){
    var arr = [];
    for (var key in ob){
        if(ob.hasOwnProperty(key)){
            arr.push(key + '=' + ob[key]);
        }
    }
    return arr.toString();
}

// create orm object containing all inquiries
var orm = {
    // retrieve all items in table burgers
    showAllBurgers: function(table, cb){
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString,[table], function(err, result){
            if (err) {
                return result.status(500).end
            };
            console.log(result);
            cb(result);
        });
    },
    // change 'devoured' in table burgers when button clicked
    devourBurger: function(table, objColVals, condition, cb){
        var queryString = 'UPDATE ' + table;
        queryString += ' SET ' + objToSql(objColVals);
        queryString += ' WHERE ' + condition;
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) {
                return result.status(500).end
            }
            console.log(result)
            cb(result);
        })
    },
    // create new burger
    create: function (table, cols, vals, cb){
        var queryString = 'INSERT INTO ' + table;
        queryString += ' (' + cols.toString() + ') ';
        queryString += 'VALUES (' + printQuestionMarks(vals.length) + ') ';
        console.log(queryString);

        connection.query(queryString, vals, function(err, result){
            if (err) throw err;
            cb(result);
        })
    }
}

// export for use in other modules
module.exports = orm;
console.log('2');