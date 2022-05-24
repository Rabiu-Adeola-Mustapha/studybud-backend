const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Student = require("../../models/student.model");

const studentLogin = async (req, res) => {
  try {
            const {email, password} = req.body;
    // const {value, error} = Student.validate(req.body);

    // if(error) return res.status(400).json({msg: "Invalid Credentials"});
    // const { RegId, password } = req.body;
      console.log(req.body)
    let student = await Student.findOne({ email: email });

    if (!student) res.status(400).json({ msg: "User does not exist" });

    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentilas" });

    const token = jwt.sign(
      {
        Id: student.Id,
        username: student.firstname,
        // level: student.level,
        // RegNum: student.regId,
      },
      "secret",
      {
        expiresIn: "1hr",
      }
    );

    res.status(200).json(token);

  } catch (error) {
    console.log(error);
    res.status(400).json(error.msg);

  }
};

module.exports = {
  studentLogin,
};

// Authenticating Student Login
