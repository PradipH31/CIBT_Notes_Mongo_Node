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

module.exports = mongo.model('Customer', customerSchema, "customers");