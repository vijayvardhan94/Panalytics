//routes for services page
const services_controller = require('../controllers/services');
const categories_controller = require('../controllers/categories');

const express = require('express');
const router = express.Router();

router.get('/services', services_controller.services);
router.get('/categories', categories_controller.categories);


module.exports = router;