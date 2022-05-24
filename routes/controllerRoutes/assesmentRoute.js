const assesmentRoute = require("express").Router();
const {
  createAssesment,
  deleteAssesment,
  getAllAssesments,
  getSingleAssesment,
  updateAssesment,
} = require("../../controller/modelControllers/assesmentController");

assesmentRoute.route("/").get(getAllAssesments).get(createAssesment);

assesmentRoute
  .route("/:assesmentId")
  .delete(deleteAssesment)
  .patch(updateAssesment)
  .get(getSingleAssesment);


module.exports = {
    assesmentRoute,
}