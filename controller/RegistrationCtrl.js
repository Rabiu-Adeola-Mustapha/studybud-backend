const bcrypt = require("bcrypt");

const Student = require("../models/student.model");
const Teacher = require("../models/teacher.model");
const Parent = require("../models/Parent");

const RegStudent = async (req, res) => {
  try {
    // if (!req.body)
    //   return res
    //     .status(400)
    //     .json({ msg: "Please Complete the Student Registration" });

    const { password } = req.body;
    // console.log(req.body);
    const hashPassword = await bcrypt.hash(password, 10);

    console.log(req.body);

    const student = await Student.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      guardianMail: req.body.guardianMail,
      guardianPhone: req.body.guardianPhone,
      address: req.body.address,
      password: hashPassword,
    });

    console.log(student);

    return res.status(201).json({ msg: "Student Registration Succesful" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.msg);
  }
};

const RegTeacher = async (req, res) => {
  try {
    // if (!req.body)
    //   res
    //     .status(400)
    //     .json({ msg: "Please Complete the techers' registration" });

    const { password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const teacher = await Teacher.create({
      email: req.body.email,
      password: hashPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      address: req.body.address,
    });
    console.log(req.body);

    return res.status(201).json({ msg: "Teacher cretaed successfully. " });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.msg);
  }
};

const RegParent = async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).json({ msg: "Pls, input all fileds correctly." });

    const { value } = req.body;
    const isEmail = await Parent.findOne({ email: value.email });
    if (isEmail)
      return res.status(400).json({ msg: "Parent already Registered" });

    const hashPassword = await bcrypt.hash(value.password, 10);

    const parent = new Parent({
      name: value.name,
      address: value.address,
      phoneNumber: value.phoneNumber,
      occupation: value.occupation,
      email: value.email,
      password: hashPassword,
    });

    await parent.save();

    res.status(201).json({ data: parent });
  } catch (error) {
    console.log(error);
    res.status(400).json(error.msg);
  }
};

const linkParentStudent = async (req, res) => {
  try {
    const { parentId } = req.params;
    const { studentId } = req.body;

    let parent = await findById(parentId);
    if (!parent) return res.status(400).json({ msg: "Parent Not Found" });

    let student = await findById(studentId);
    if (!student) return res.status(400).json({ msg: "Student Not Found" });

    student = await Student.findByIdAndUpdate(
      studentId,
      { parent: parent._Id },
      { new: true }
    );

    parent = await Parent.findByIdAndUpdate(
      parentId,
      {
        $push: { students: student._Id },
      },
      { new: true }
    );

    res.status(200).json({ data: parent });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = {
  RegStudent,
  RegTeacher,
  RegParent,
  linkParentStudent,
};
