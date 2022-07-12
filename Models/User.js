//mongoose schema for user
const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    mobile: {
        type: String,
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    DOB: {
        type: String
    },
    Height: {
        type: String
    },
    weight: {
        type: String
    },
    bloodGroup: {
        type: String
    },
    mosad: {
        type: String
    },
    fathername: {
        type: String
    },
    fatherOccupation: {
        type: String
    },
    fatherMosad: {
        type: String
    },
    fatherMonthlySalary: {
        type: String
    },
    mothername: {
        type: String
    },
    motherOccupation: {
        type: String
    },
    motherMosad: {
        type: String
    },
    motherMonthlySalary: {
        type: String
    },
    physicalDisability: {
        type: Boolean,
        default: false
    },
    physicalDisabilityDescription: {
        type: String
    },
    meritalStatus: {
        type: String,
        enum: ['Unmarried', 'Divorced', 'Widowed'],
        default: 'Unmarried',
        required: true
    },
    religion: {
        type: String,
    },
    caste: {
        type: String,
    },
    hideContactInfo: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', User);