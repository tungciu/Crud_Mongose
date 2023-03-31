const mongoose = require('mongoose');

const spSchama = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Gia: {
        type: Number,
        
    },
    Soluong: {
        type: Number,
    }
});

const SpModale = new mongoose.model('sp', spSchama);

module.exports = SpModale;