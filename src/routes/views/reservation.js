"use strict";

const router = require("express").Router();

const reservation = require("../../controllers/reservation");
// const permissions = require("../../middlewares/permissions");

router
  .route("/")
  .get(permissions.isLogin, reservation.list)
  .post(permissions.isLogin, reservation.create);

router
  .route("/:id")
  .get(permissions.isLogin, reservation.read)
  .put(permissions.isLogin, reservation.update)
  .patch(permissions.isLogin, reservation.update)
  .delete(permissions.isLogin, reservation.delete);

module.exports = router;
