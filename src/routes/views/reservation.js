"use strict";

const router = require("express").Router();

const reservation = require("../../controllers/views/reservation");
// const permissions = require("../../middlewares/permissions");


router.all("/", reservation.list)

module.exports = router;
