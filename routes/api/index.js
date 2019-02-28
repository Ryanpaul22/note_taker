const router = require("express").Router();
const noteRoutes = require("./noteRoutes");

// set up routes and prefix them
router.use("/notes", noteRoutes);


module.exports = router;
