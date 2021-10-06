const Course = require('../models/Courses');
const {
  mongooseToObject,
  multipleMongooseToObject,
} = require('../../util/mongoose');

const showCourse = async (req, res) => {
  const { slug } = req.params;
  try {
    // Course.findOne({ slug: slug })
    //   .then((course) => {
    //     // console.log(course);
    //     // res.render('courseDetail', { course: course.toObject() });
    //     res.send('hi');
    //   })
    //   .catch((err) => console.log(err));
    if (slug) {
      const course = await Course.findOne({ slug }).exec();
      res.render('course/courseDetail', { course: mongooseToObject(course) });
    } else {
      const course = await Course.find({}).exec();
      res.render('home', { course: multipleMongooseToObject(course) });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getInfo = async (req, res) => {
  res.render('course/createCourse');
};
const createCourse = async (req, res) => {
  // const { name, description, image } = req.body;
  // *** Cách 1
  // await Course.create(req.body);
  // *** Cách 2
  const course = await new Course(req.body);
  await course
    .save()
    .then(() => res.redirect('/'))
    .catch((error) => res.status(500).send(error));
  // const data = await Course.find({}).exec();
  // res.render('home', { course: multipleMongooseToObject(data) });
};

const showDetailCourse = async (req, res) => {
  const { id } = req.params;
  const course = await Course.findById(id).exec();
  res.render('course/editCourse', { course: course.toObject() });
};

const UpdateCourse = async (req, res) => {
  const { id } = req.params;
  Course.findOneAndUpdate({ _id: id }, req.body)
    .then(() => res.redirect('/'))
    .catch((err) => res.send(err));
};

const DeleteCourse = (req, res) => {
  console.log(req.params.id);
  Course.deleteOne({ _id: req.params.id })
    .then(() => res.redirect('/dsdsd'))
    .catch((err) => res.send(err));
};
module.exports = {
  showCourse,
  getInfo,
  createCourse,
  showDetailCourse,
  UpdateCourse,
  DeleteCourse,
};
