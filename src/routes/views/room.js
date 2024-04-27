"use strict";

const router = require("express").Router();

const room = require("../../controllers/views/room");
// const permissions = require("../../middlewares/permissions");

router.all("/", room.list)

// router
//   .route("/:id")
//   .get(room.read)
//   .put( room.update)
//   .patch( room.update)
//   .delete( room.delete);

module.exports = router;
