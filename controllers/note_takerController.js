const db = require("../config/connection");

module.exports = {
  // find all notes
  findAll: function (req, res) {
    db
      .query("SELECT * FROM note_taker", function (err, dbNote_taker) {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .json(err);
        }
        res.json(dbNote_taker);
      });
  },
  // find note by id (this will come in req.params.id)
  findById: function (req, res) {
    db
      .query("SELECT * FROM note_taker WHERE id = ?", [req.params.id], function (err, dbNote_taker) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        res.json(dbNote_taker[0]);
      });
  },
  // insert / create new note (takes in req.body via POST)
  createNote: function (req, res) {
    // req.body => {note_taker: "Make a note"}
    db
      .query("INSERT INTO note_taker SET ?", req.body, function (err, dbNote_taker) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        res.json(dbNote_taker);
      });
  },
  
  // delete a note based on its id (req.params.id)
  deleteNote: function (req, res) {

    db.query("DELETE FROM note_taker WHERE id = ?", [req.params.id], function (err, dbNote_taker) {

        if (err) {
          console.log(err);
          return res.status(400).json(err);
        }
        res.json(dbNote_taker);
      });

  }
}