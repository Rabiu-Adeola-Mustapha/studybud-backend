const bcrypt = require("bcrypt");

const Student = require("../models/student.model");
const Teacher = require("../models/teacher.model");

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

module.exports = {
  RegStudent,
  RegTeacher,
};
