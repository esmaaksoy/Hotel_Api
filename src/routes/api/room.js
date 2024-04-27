"use strict";

const router = require("express").Router();

const room = require("../../controllers/api/room");
const permissions = require("../../middlewares/permissions");

router.route("/").get(room.list).post(permissions.isAdmin, room.create);

router
  .route("/:id")
  .get(room.read)
  .put(permissions.isAdmin, room.update)
  .patch(permissions.isAdmin, room.update)
  .delete(permissions.isAdmin, room.delete);

module.exports = router;
