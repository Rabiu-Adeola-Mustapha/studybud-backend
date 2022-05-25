const mongoose = require("mongoose");
require("dotenv").config();

const DbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" 👌 DataBase Up ... ");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = DbConnect;
