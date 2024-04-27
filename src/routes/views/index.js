"use strict";

const router = require("express").Router();




router.use("/reservations", require("./reservation"));

router.use("/rooms", require("./room"));



module.exports = router;
