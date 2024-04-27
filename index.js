"use strict";

const express = require("express");
const app = express();

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

app.set("view engine", "ejs");

// asyncErrors to errorHandler:
require("express-async-errors");

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

// Middlewares:

// Accept JSON:
app.use(express.json());

// Logger:
// app.use(require("./src/middlewares/logger"));

// Auhentication:
app.use(require("./src/middlewares/authentication"));

// findSearchSortPage / res.getModelList:
app.use(require("./src/middlewares/queryHandler"));

// Routes:

// routes/index.js:
app.use("/api", require("./src/routes/api"));

app.use("/views", require("./src/routes/views"));

// HomePath:
app.all("/", (req, res) => {
  res.redirect("/views/rooms");
});

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.
