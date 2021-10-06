const Course = require('../models/Courses');

const showMyCourse = async (req, res) => {
  let data = await Course.find({}).exec();
  res.render('me/myCourse', { data: data.map((item) => item.toObject()) });
};
module.exports = { showMyCourse };
