const mongoose = require('mongoose');

const Family = new mongoose.Schema({
    name: {
        type: String
    },
    relation: {
        type: String
    },
    occupation: {
        type: String
    },
    maritalStatus: {
        type: String
    },
    MonthlySalary: {
        type: String
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Family', Family);