const mongoose = require('mongoose');

const Job = new mongoose.Schema({
    jobType: {
        type: String
    },
    jobTitle: {
        type: String
    },
    jobLocation: {
        type: String
    },
    jobDescription: {
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

module.exports = mongoose.model('Job', Job);