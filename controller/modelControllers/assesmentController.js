const Assesment = require("../../models/assesment.model");

const getAllAssesments = async (req, res) => {
  try {
    res.send("Getting All assesment");
    const assesments = await Assesment.find();

    res.status(200).json({ assesments });
  } catch (error) {
    res.status(400).json(error.msg);
  }
};
const getSingleAssesment = async (req, res) => {
  try {
    res.send("Getting a single assesment");
    const assementId = req.params.assementId;

    const assesment = await Assesment.findById(assementId);

    if (!assesment)
      return res.status(400).json({ msg: " Assesment Not Found" });

    res.status(200).json({ assesment });
  } catch (error) {
    res.status(400).json(error.msg);
  }
};
const createAssesment = async (req, res) => {
  try {
    res.send("Creating assesment");

    if (!req.body)
      return res.status(400).json({ msg: "Please Enter all fields" });

    const assement = await Assesment.create({
      term: req.body.term,
      note: req.body.note,
      subject: req.body.subject,
      // studentId : req.body.studentId,
    });

    // res.status(201).json(assement);
  } catch (error) {
    res.status(400).json(error.msg);
  }
};
const deleteAssesment = async (req, res) => {
  try {
    const assementId = req.params.assementId;
    let assesment = await Assesment.findById(assementId);

    if (!assesment)
      return res.status(400).json({ msg: " Assesment Not Found" });

    await Assesment.remove(assesment);

    res.status(200).json("Assement Deleted Succesfully");
  } catch (error) {
    res.status(400).json(error.msg);
  }
};

const updateAssesment = async (req, res) => {
  try {
    const { assementId } = req.params;
    let assesment = await Assesment.findById(assementId);

    if (!assesment)
      return res.status(400).json({ msg: "Assesment Record Not Found" });

    assesment = await Assesment.findByIdAndUpdate(assementId, req.body, {
      new: true,
    });

    res.status(200).json(assesment);
  } catch (error) {
    res.status(400).json(error.msg);
  }
};

module.exports = {
  getAllAssesments,
  getSingleAssesment,
  createAssesment,
  deleteAssesment,
  updateAssesment,
};
