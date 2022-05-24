const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const Teacher = require("../../models/teacher.model");

const teacherLogin = async (req, res) => {
  
  try {
    console.log(req.body);
    // const { value, error } = await Teacher.validate(req.body);
    // if (error) res.status(400).json({ msg: "Invalid Credentials" });

    const { email, password} = req.body;

    const teacher = await Teacher.findOne({ email: email });
    if (!teacher) return res.status(400).json({ msg: "Invalid Credentials" });

    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) return res.status(400).json("Invalid Credentials");

    const token = jwt.sign(
      {
        Id: teacher.Id,
        // RegId: teacher.RegId,
        firstname: teacher.firstname,
      },

      "secret",

      { 
          expiresIn: "1hr" 
      }
    );

    res.status(200).json(token);

  } catch (error) {
    res.status(400).json(error.msg);
  }
};


module.exports = {
  teacherLogin
}

// Authenticating teacher Login
