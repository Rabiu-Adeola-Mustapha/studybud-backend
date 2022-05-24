const authRoute = require("express").Router();

const { studentLogin } = require("../controller/authControllers/studentAuth");
const { teacherLogin } = require("../controller/authControllers/teacherAuth");




authRoute.post("/student", studentLogin);
authRoute.post("/teacher", teacherLogin);


module.exports = {
  authRoute,
};
