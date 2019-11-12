// import orm to be used in calls
var orm = require('../config/orm.js');


// object for calls to make to database
var burger = {
    // display all burgers not eaten and devoured in table burgers
    showAllBurgers: function(cb){
        orm.showAllBurgers('burgers', function(res){
            console.log('burger.js show');
            cb(res);
        });
    },
    // change 'devoured' in table burgers to true
    // cols and vals are arrays
    devourBurger: function(cols, vals, cb){
        orm.devourBurger('burgers', cols, vals, function(res){
            console.log('burger.js devour');
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

console.log('-----')
// console.log(this.devourBurger('burgers', ))
// console.log(orm.showAllBurgers('burgers', function(res){
//     console.log("burger.js-2");
// }));
console.log('3');
module.exports = burger