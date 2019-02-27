const router = require("express").Router();
var path = require("path");
// import database connection
const db = require("../../config/connection");


// set up home page (root) route 
router.route('/').get((req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.route('/notes').get((req, res) => {
  res.sendFile(path.join(__dirname, '../../public/note_taker.html'));
});

module.exports = router;
