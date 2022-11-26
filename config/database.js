const mongoose = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "moviestar";

exports.mongoConnect = async () => {
  // const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
  const mongoStringConnection =
    "mongodb+srv://admin:admin@cluster0.oytyuar.mongodb.net/moviestar";
  try {
    await mongoose.connect(mongoStringConnection);
    console.log("dbonline");
  } catch (error) {
    console.log(error);
    throw new Error("DB not connected");
  }
  // mongoose.connect(mongoStringConnection);
  // mongoose.Promise = global.Promise;
  // const dbConnection = mongoose.connection;
  // dbConnection.on(
  //   "error",
  //   console.error.bind(console, "Mongodb connection error")
  // );
};
