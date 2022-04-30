module.exports.homePage = function(req, res)
{
    console.log('Me is home Contr lol');
    return res.render('home', {
        title: 'Home'
    });
};