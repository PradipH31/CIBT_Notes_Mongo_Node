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

Customer.find({ firstName: 'Rabin' }, (err, rows) => {
    rows.forEach((row, index) => {
        console.log(row);
    })
});