const router = require("express").Router();
const noteRoutes = require("./note_takerRoutes");

// set up routes and prefix them
router.use("/note", noteRoutes);


module.exports = router;
