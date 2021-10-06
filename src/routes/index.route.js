const express = require('express');
const { showMyCourse } = require('../app/controllers/MeController');
const { courseRouter } = require('./course.route');
const rootRouter = express.Router();
const { newRouter } = require('./new.route');
const { siteRouter } = require('./site.route');

rootRouter.use('/news', newRouter);
rootRouter.use('/course', courseRouter);
rootRouter.use('/my-course', showMyCourse);
rootRouter.use('/', siteRouter);

module.exports = { rootRouter };
