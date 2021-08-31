//import mongoose
const mongoose = require('mongoose');

var DemoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Demo', DemoSchema);