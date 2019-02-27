const router = require("express").Router();
const note_takerController = require("../../controllers/note_takerController");

// define API routes

// when user hits /api/notes
router
  .route("/")
  .get(note_takerController.findAll)
  .post(note_takerController.createNote);


// when user hits /api/notes/:id
router
  .route("/:id")
  .get(note_takerController.findById)
  
  .delete(note_takerController.deleteNote);

module.exports = router;
