const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        typeOfTask: {
            type: String,
            required:true
        }
    }
);

const List = mongoose.model('List', ListSchema);

module.exports = List;