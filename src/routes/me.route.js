const express = require('express');
const { showMyCourse } = require('../app/controllers/MeController');
const meRouter = express.Router();

// meRouter.
meRouter.get('/', showMyCourse);

module.exports = { meRouter };
