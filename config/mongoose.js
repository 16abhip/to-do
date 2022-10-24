const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin-abhi:admin-abhi@cluster0.gazkwwk.mongodb.net/ToDoList_db');

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'error connecting to db'));

// if up and running then print the mess
db.once('open',function()
{
    console.log('connected to the database');
});
