//routes for services page
const categories_controller = require('../controllers/categories');

const express = require('express');
const router = express.Router();

router.get('/categories', categories_controller.categories);

module.exports = router;