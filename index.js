const express = require('express');
const hostname = '0.0.0.0';
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;

app.use(express.urlencoded());

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
