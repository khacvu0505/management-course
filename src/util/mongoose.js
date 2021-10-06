module.exports = {
  multipleMongooseToObject: (mongooseArrays) => {
    return mongooseArrays.map((item) => item.toObject());
  },
  mongooseToObject: (mongoose) => {
    return mongoose.toObject();
  },
};
