const NewPage = (req, res) => {
  res.render("news");
};
const ShowDetail = (req, res) => {
  res.send("Show Detail");
};
module.exports = { NewPage, ShowDetail };
