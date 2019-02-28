const router = require("express").Router();
// import database connection
const db = require("../../config/connection");


// set up home page (root) route to load up handlebars template with notes list
router
  .route("/")
  .get(function(req, res) {
    db.query("SELECT * FROM notes", function(err, dbNotes) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      res.render("notes", {noteList: dbNotes});
    });
  });

module.exports = router;
