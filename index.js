var mongoose = require('mongoose');

var Customer = require('./models/customer')

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    Customer.find({}, function(err, rows) {
        res.render('customers/index', {
            customers: rows
        })
    });
});

app.get('/customers/:id', function(req, res) {
    Customer.findOne({ _id: req.params.id }, function(err, row) {
        res.send(row);
    });
});

app.post('/', function(req, res) {
    var customer = new Customer({
        _id: mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contactNo: req.body.contactNo,
        createdDate: new Date(),
        status: (req.body.status !== null)
    });
    customer.save(function(err) {
        if (!err) {
            res.redirect('/');
        }
    });
});

app.listen(9000, () => {
    console.log("Server running at 9000");
})