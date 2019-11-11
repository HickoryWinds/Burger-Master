// import orm to be used in calls
var orm = require('../config/orm.js');


// object for calls to make to database
var burger = {
    showAllBurgers: function(cb){
        orm.showAllBurgers('burgers', function(res){
            console.log('burger.js -1');
            cb(res);
        });
    }
};

console.log('-----')
console.log(orm.showAllBurgers('burgers', function(res){
    console.log("burger.js-2");
}));
console.log('3');
module.exports = burger