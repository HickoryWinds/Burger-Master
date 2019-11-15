// import orm to be used in calls
var orm = require('../config/orm.js');


// object for calls to make to database
var burger = {
    // display all burgers not eaten and devoured in table burgers
    showAllBurgers: function(cb){
        orm.showAllBurgers('burgers', function(res){
            cb(res);
        });
    },
    // change 'devoured' in table burgers to true
    devourBurger: function(vals, cb){
        orm.devourBurger('burgers', vals, function(res){
            cb(res);
        })
    },
    // create new burger entry in burgers table
    create: function(cols, vals, cb){
        orm.create('burgers', cols, vals, function(res){
            cb(res);
        })
    }
};

module.exports = burger