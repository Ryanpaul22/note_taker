const router = require("express").Router();
const notesController = require("../../controllers/noteController");

// define API routes

// when user hits /api/notes
router
  .route("/")
  .get(notesController.findAll)
  .post(notesController.createNote);


// when user hits /api/notes/:id
router
  .route("/:id")
  .get(notesController.findById)
  .put(notesController.updateNote)
  .delete(notesController.deleteNote);

module.exports = router;
