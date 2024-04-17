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

  // Example Room:
//   const rooms = [];

//   for (let key in [...Array(5)]) {

//     const room = await Room.create({
//       roomNumber: 1 * key,
//       images: [
//         "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp",
//       ],
//       bedType: 1,
//       price: 300,
//     });

//    rooms.push(room);
//   }


  console.log("* Synchronized *");
};
