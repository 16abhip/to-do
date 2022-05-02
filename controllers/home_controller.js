
const db = require('../config/mongoose');
const List = require('../models/list');
// var a;
// function numbers()
// {
//     List.countDocuments({}, function (err, count) {
//         if (err){
//             return console.log(err);
//         }else{
//             a = count;
//         }
//     });
// }
// List.countDocuments({}, function (err, count) {
//     if (err){
//         console.log(err);
//     }else{
//         a = count;
//     }
// });

module.exports.homePage = function(eq, res)
{
    List.find({}, function(err, list)
    {
        if(err)
        {
            return console.log('ERROR IN FETCHING DATA FROM DATABASE: ', err);
        }
        res.render('home', {
            title: 'Home',
            task: list,
            num: 10
        });
    });
};

module.exports.deleteDocument = function(req, res){
    let id = req.query.id;
    List.findByIdAndDelete(id, function(err)
    {
        if(err)
        {
            return console.log('Error in deleting :', err);
        }
        console.log('deleted lol!');
        return res.redirect('back');
    });
};