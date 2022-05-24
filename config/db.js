const mongoose = require("mongoose")


const DbConnect  = async () => {

    try {

       await mongoose.connect("mongodb://127.0.0.1:27017/portal");

        console.log(" 👌 DataBase Up ... ")
    } catch (error) {
        console.log(error)
        process.exit(1)
    };
};


module.exports = DbConnect;