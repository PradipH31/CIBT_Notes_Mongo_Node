var mongoose = require('mongoose');

var Customer = require('./models/customer')

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    Customer.find({}, function(err, rows) {
        res.render('customers/index', {
            customers: rows
        })
    });
});

app.listen(9000, () => {
    console.log("Server running at 9000");
})