const RegistRoute = require("express").Router();
const { RegStudent, RegTeacher } = require("../../controller/RegistrationCtrl");

// Teachers Student Registrarion route
RegistRoute.post("/studentreg", RegStudent);
RegistRoute.post("/teacherreg", RegTeacher);

module.exports = {
  RegistRoute,
};
