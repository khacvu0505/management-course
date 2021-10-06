const express = require("express");
const newRouter = express.Router();

const { NewPage, ShowDetail } = require("../app/controllers/NewController");
newRouter.use("/:slug", ShowDetail);
newRouter.use("/", NewPage);

module.exports = { newRouter };
