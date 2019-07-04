var mongoose = require('mongoose');

var Customer = require('./models/customer')

var customer = new Customer({
    _id: mongoose.Types.ObjectId(),
    firstName: 'Manjit',
    lastName: 'Shakya',
    email: 'mnzit@gmail.com',
    contactNo: '8392457893',
    createdDate: new Date(),
    status: false
});

customer.save(function(err) {
    if (err) {
        console.log('er');
    }
    console.log('Saved')
});