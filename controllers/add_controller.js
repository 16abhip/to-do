
const db = require('../config/mongoose');
const List = require('../models/list');


module.exports.addWork = function(req, res)
{
    List.create({
        name: req.body.name,
        date: req.body.date,
        typeOfTask: req.body.typeOfTask
    }, function(err, list)
    {
        if(err)
        {
            return console.log('Failed in submmiting to DB');
        }
        console.log('************** inserted data in database');
        // return res.render('back', {
        //     title: 'add',
            
        // });
        return res.redirect('back');
    });

    
};

