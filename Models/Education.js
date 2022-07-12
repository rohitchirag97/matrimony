const mongoose = require('mongoose');

const Education = new mongoose.Schema({
    degree: {
        type: String
    },
    institute: {
        type: String
    },
    PassingYear: {
        type: String
    },
    Percentage: {
        type: String
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Education', Education);