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

Customer.findById('5d1ce7a4e04c5a3c3836123e', (err, row) => {
    console.log(row);
});