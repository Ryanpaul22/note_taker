const db = require("../config/connection");

module.exports = {
  // find all note
  findAll: function (req, res) {
    db
      .query("SELECT * FROM notes", function (err, dbNotes) {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .json(err);
        }
        res.json(dbNotes);
      });
  },
  // find note by id (this will come in req.params.id)
  findById: function (req, res) {
    db
      .query("SELECT * FROM notes WHERE id = ?", [req.params.id], function (err, dbNotes) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        res.json(dbNotes[0]);
      });
  },
  // insert / create new note item (takes in req.body via POST)
  createNote: function (req, res) {
    // req.body => {note: "Make a note"}
    db
      .query("INSERT INTO notes SET ?", req.body, function (err, dbNotes) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        res.json(dbNotes);
      });
  },
  // UPDATE/PUT a note to mark it from incomplete to complete (false => true),
  // this will use req.params.id to know where they're updating
  updateNote: function (req, res) {
    // req.params => {id : 1} req.params.id => 1
    db
      .query("UPDATE notes SET completed = true WHERE id =?", [req.params.id], function (err, dbNotes) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        res.json(dbNotes);
      })
  },
  // delete a note based on its id (req.params.id)
  deleteNote: function (req, res) {

    db.query("DELETE FROM notes WHERE id = ?", [req.params.id], function (err, dbNotes) {

        if (err) {
          console.log(err);
          return res.status(400).json(err);
        }
        res.json(dbNotes);
      });

  }
}