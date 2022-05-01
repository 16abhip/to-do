const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

// view engines

app.set('view engine', 'ejs');
app.set('views', './views');

// routers

app.use('/', require('./routes/index'));

// static files

app.use('/assets' , express.static('assets'));

app.listen(port, function(err)
{
    if(err)
    {
        return console.log('Error! ', err);
    }
    console.log('Server is up and Running on Port: ', port);
});