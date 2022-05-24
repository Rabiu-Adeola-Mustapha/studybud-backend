const adminAuthRoute = require("express").Router();

const {
  RegistralLogin,
  RegistralRegistration,
} = require("../controller/authControllers/registralAuth");


adminAuthRoute.post("/register", RegistralRegistration);
adminAuthRoute.post("/login", RegistralLogin);



module.exports = {
  adminAuthRoute,
};
