// import express for and burger.js for routing
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// redirect from '/' to '/burgers'
router.get('/', function(req, res){
    res.redirect('/burgers')
});

router.get('/burgers', function(req, res){
    burger.showAllBurgers(function(data){
        var hbsObject = {burgers: data};
        // var hbsObject = {burgers: [1,2,3,4,5]};
        console.log('burger-controller.js-1-hbs');
        console.log(hbsObject);
        console.log('start');
        console.log(data[0].id);
        console.log(data[1].burger_name);
        console.log(data[2].devoured);
        console.log('end');
        res.render('index', hbsObject);
    });
});

console.log(burger.showAllBurgers(function(data){
    console.log("burger-controller.js-2");
    console.log(data);
    var obj = {burgers:data};
    console.log(obj);
}));
console.log('4')
module.exports = router;