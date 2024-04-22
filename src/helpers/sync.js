"use strict";

module.exports = async function () {
  //   return null;

  const User = require("../models/user");
  const Room = require("../models/user");
  const Reservation = require("../models/user");

  const { mongoose } = require("../configs/dbConnection");
  await mongoose.connection.dropDatabase();
  console.log("- Database and all data DELETED!");

  //create admin

  await User.create({
    username: "admin",
    password: "aA?123456",
    email: "admin@site.com",
    isActive: true,
    isAdmin: true,
  });
  console.log("- Admin user created.");

  console.log("* Synchronized *");
};
