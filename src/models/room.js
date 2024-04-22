"use strict";

const { mongoose } = require("../configs/dbConnection");

const RoomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    images: [
      {
        type: String,
        trim: true,
        required: true,
        validate: {
          validator: function (img) {
            return /(https?:\/\/.*\.(?:png|jpg))/i.test(img);
          },
          message: (props) => `${props.value} is not a valid image url!`,
        },
      },
    ],
    bedType: {
      type: Number,
      required: true,
      enum: [1, 2, 3],
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "rooms",
    timestamps: true,
  }
);

module.exports = mongoose.model("Room", RoomSchema);
