const Course = require('../models/Courses');
const { multipleMongooseToObject } = require('../../util/mongoose');
const renderHome = async (req, res, next) => {
  // *** Cách viết với callback
  // res.render("home");
  // Course.find({}, (err, courses) => {
  //   if (!err) {
  //     res.status(200).send(courses);
  //   } else {
  //     res.status(400).send('error');
  //   }
  // });

  // *** Cách viết với Promises
  Course.find({})
    .then((course) => {
      // course = course.map((item) => item.toObject());
      res.render('home', { course: multipleMongooseToObject(course) });
    })
    // .catch((err) => next(err));
    .catch(next);
};

const renderSearch = (req, res) => {
  res.render('search');
};
module.exports = { renderHome, renderSearch };
