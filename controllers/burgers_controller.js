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
        res.render('index', hbsObject);
    });
});

// update 'devoured' status in table burgers
router.put('/burgers/update/:id', function(req, res){
    var condition = 'id = ' + req.params.id;
        burger.devourBurger(condition, function(){
    res.redirect('/burgers');
    });
});

// add a new burger to the list
router.post('/burgers/create', function(req, res){
    burger.create('burger_name', req.body.sandwich, function(){
        res.redirect('/burgers')
    });
});

module.exports = router;