const express = require('express');
const courseRouter = express.Router();

const {
  showCourse,
  getInfo,
  createCourse,
  showDetailCourse,
  UpdateCourse,
  DeleteCourse,
} = require('../app/controllers/CourseController');

courseRouter.get('/create', getInfo);
courseRouter.post('/store', createCourse);
courseRouter.get('/:id/edit', showDetailCourse);
courseRouter.put('/:id', UpdateCourse);
courseRouter.delete('/:id', DeleteCourse);
courseRouter.get('/:slug', showCourse);

module.exports = { courseRouter };
