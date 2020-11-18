const mongoose = require("mongoose");



let category = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Number,
    },
    createdDate: {
        type: Date,
        default: Date.now
    },



});

const model = mongoose.model("category", category);

module.exports = model;