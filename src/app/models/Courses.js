const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String, default: '', maxlength: 255 },
    description: { type: String, default: '', maxlength: 600 },
    image: { type: String, default: '', maxlength: 255 },
    slug: { type: String, slug: 'name', unique: true },
  },
  { timestamp: true }
);

module.exports = mongoose.model('Course', Course);
