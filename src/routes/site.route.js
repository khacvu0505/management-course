const express = require("express");
const siteRouter = express.Router();
const {
  renderHome,
  renderSearch,
} = require("../app/controllers/SiteController");

siteRouter.use("/search", renderSearch);
siteRouter.use("/", renderHome);

module.exports = { siteRouter };
