const express = require("express");
const router = express.Router();
const peliController = require('../controller/peliControler')

router.get("/a", peliController.getPelissByNombre);

module.exports = router;
