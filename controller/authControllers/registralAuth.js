// Authenticating Registral Login
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Registral = require("../../models/registral.model");

const RegistralRegistration = async (req, res) => {
        console.log(req.body);
  try {
    const { firstName, lastName, password, email } = req.body;

    if (!req.body) return res.status(400).json({ msg: "Invalid Credentials" });

    let admin = await Registral.findOne({ email: email });
    if (admin) return res.status(400).json({ msg: "email already exist" });

    const hashPassword = await bcrypt.hash(password, 10);

    admin = await Registral.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPassword,
    });

    return res.status(200).json(admin);
    
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.msg);
  }
};



const RegistralLogin = async (req, res) => {
   
  try {
        
    const { email, password } = req.body;
     

    const admin = await Registral.findOne({ email: email });
    

    if (!admin) return res.status(400).json({ msg: "Invalid Credentials" });
    console.log(email, password);

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ msg: "Inavalid Credentials" });
    

    // req.body.role = "admin"
    const token = jwt.sign(
      {
        Id: Registral.Id,
        username: Registral.firstname,
        // RegNum: Registral.regId,
        role: "admin",
      },
      "secret",
      {
        expiresIn: "1hr",
      }
    );

    return res.status(200).json(token);

  } catch (error) {

    res.status(400).json(error.msg);
  }
  
};

module.exports = {
  RegistralRegistration,
  RegistralLogin,
};
