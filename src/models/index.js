const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.DB_URL;

mongoose
  .connect(uri, {
    serverSelectionTimeoutMS: 2000,
  })
  .then(
    () => console.log("Connected"),
    (err) => console.log(err),
  );

module.exports = mongoose;
