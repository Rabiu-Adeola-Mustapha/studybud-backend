// const { urlencoded } = require("express");
const express = require("express");
const dotenv = require("dotenv").config();
const DbConnect = require("./config/db");
const cors = require("cors");

// Auth route for Admin Students and teachers
const { authRoute, regRoute } = require("./routes/authRoutes");

const { assesmentRoute } = require("./routes/controllerRoutes/assesmentRoute");
const { studentRoute } = require("./routes/controllerRoutes/studentRoute");
const { teacherRoute } = require("./routes/controllerRoutes/teacherRoute");
const { adminAuthRoute } = require("./routes/regAuthRoute");
const { RegistRoute } = require("./routes/controllerRoutes/RegistRoute");

const app = express();

PORT = process.env.PORT;

//middlewares packages
app.use(cors());
app.use(express.json());
// app.use(urlencoded());

//auth route for Student and Teachers Login
app.use("/api/studentportal/login", authRoute);

//  Auth route for admin Reg and login
app.use("/api/studentportal/admin", adminAuthRoute);

// student and techer Registration route
app.use("/api/studentportal/admin/reg", RegistRoute);

//assesment crud route
app.use("/api/studentportal/assesment", assesmentRoute);

// student teacher Crud
// app.use("/api/studentportal/studentregistration", regRoute);
// app.use("/api/studentportal/teacherregistration", regRoute);

const start = async () => {
  await DbConnect();
  // listening to server
  app.listen(PORT, () => {
    console.log(`🚀 Server Up on port ${PORT}..`);
  });
};

start();
