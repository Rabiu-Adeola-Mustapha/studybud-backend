const teacherRoute = require("express").Router();

const {
  RegTeacher,
  deleteTeacher,
  getAllTeachers,
  getSingleTeacher,
  updateTeacher,
} = require("../../controller/modelControllers/teacherController");



teacherRoute.get("/", getAllTeachers);
teacherRoute.get("/:teacherId", getSingleTeacher);
teacherRoute.post("/", RegTeacher);
teacherRoute.delete("/", deleteTeacher);
teacherRoute.patch("/", updateTeacher);



module.exports = {
  teacherRoute,
};
