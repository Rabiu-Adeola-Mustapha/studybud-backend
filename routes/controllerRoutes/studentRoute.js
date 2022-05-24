const studentRoute = require("express").Router();

const {
  // RegStudent,
  deleteStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
} = require("../../controller/modelControllers/studentController");

studentRoute.route("/").get(getAllStudents);

studentRoute
  .route("/:studentId")
  .get(getSingleStudent)
  .delete(deleteStudent)
  .patch(updateStudent);



  module.exports = {
      studentRoute,
  }
