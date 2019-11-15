// import express for and burger.js for routing
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// redirect from '/' to '/burgers'
router.get('/', function(req, res){
    res.redirect('/burgers')
});
// get information for all burgers
router.get('/burgers', function(req, res){
    burger.showAllBurgers(function(data){
        var hbsObject = {burgers: data};
        // var hbsObject = {burgers: [1,2,3,4,5]};
        // console.log('burger-controller.js-1-hbs');
        // console.log(hbsObject);
        // console.log('start');
        // console.log(data[0].id);
        // console.log(data[1].burger_name);
        // console.log(data[2].devoured);
        // console.log('end');
        res.render('index', hbsObject);
    });
});

// console.log(burger.showAllBurgers(function(data){
//     console.log("burger-controller.js-2");
//     console.log(data);
//     var obj = {burgers:data};
//     console.log(obj);
// }));

// update 'devoured' status in table burgers
router.put('/burgers/update/:id', function(req, res){
    // var condition = 'id = ' + 1;
    var condition = 'id = ' + req.params.id;
    console.log('******************')
    console.log('condition ' + condition);
    // burger.devourBurger({devoured: true}, condition, function(){
        burger.devourBurger(condition, function(){
    // burger.devourBurger({devoured: req.body.devoured}, condition, function(){
    res.redirect('/burgers');
    });
});

// add a new burger to the list
router.post('/burgers/create', function(req, res){
    // burger.create(['burger_name', 'devoured'],[req.body.sandwich, false], function(){
    burger.create('burger_name', req.body.sandwich, function(){
    // burger.create(['burger_name', 'devoured'],[req.body.name, req.body.devoured], function(){
        res.redirect('/burgers')
    });
});

console.log('4')
module.exports = router;