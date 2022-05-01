const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
const addController = require('../controllers/add_controller');
console.log('ADD router is up');

router.post('/add-task', addController.addWork);

module.exports = router;
