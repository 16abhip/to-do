const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');


router.get('/', homeController.homePage);
router.get('/addToList', function(req, res)
{
    res.render('add', {
        title: 'ADD'
    });
});
router.use('/add', require('./add'));
module.exports = router;