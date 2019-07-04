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

customerSchema.query.byEmail = function(email) {
    return this.where({ email: new RegExp(email, 'i') });
}

customerSchema.query.byStatus = function(status) {
    return this.where({ status: status });
}

var Customer = mongo.model('Customer', customerSchema, "customers");

Customer.find().byEmail('b').exec(function(err, rows) {
    console.log(rows);
});

Customer.find().byStatus(true).exec(function(err, rows) {
    console.log(rows);
});