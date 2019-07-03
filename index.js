var mongoose = require('mongoose');

var mongo = mongoose.createConnection('mongodb://localhost/cibt_project', { useNewUrlParser: true });

var Schema = mongoose.Schema;

var customerSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    contactNo: String,
    createdDate: Date,
    modifiedDate: Date,
    status: Boolean
});

var Customer = mongo.model('Customer', customerSchema, "customers");

var customer = new Customer({
    _id: mongoose.Types.ObjectId(),
    firstName: 'Rabin',
    lastName: 'Dhoju',
    email: 'rabin@gmail.com',
    contactNo: '12124314',
    createdDate: new Date(),
    status: true
});
customer.save((err) => {
    if (err) {
        console.log('err');
    }
    console.log('Saved successfully');
});