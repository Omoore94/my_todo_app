const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    details : {
        type: String
    },
    time : {
        type: Date,
        default: Date.now         
    },
    completed : {
        type: Boolean,
        default: false
    }
}, {timestamps : true}); //timestamps is a property from mongodb, not part of the schema

const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;