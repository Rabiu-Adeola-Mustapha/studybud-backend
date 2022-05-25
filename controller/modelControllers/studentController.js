const bcrypt = require("bcrypt");
const Student = require("../../models/student.model");


const getAllStudents = async (req, res) => {

    try {

        const student = await Student.find();

        res.status(200).json(student)

    } catch (error) {
        res.status(400).json(error.msg);
    };
    
};
const getSingleStudent = async (req, res) => {

    try {
        
        const { studentId } = req.params;

        const student = await Student.findById(studentId);

        if (!student) res.status(400).json({ msg: "Student Not Found" });

        res.status(200).json(student)
    } catch (error) {
        res.status(400).json(error.msg);
    };
};


const deleteStudent = async (req, res) => {
    try {

        const { studentId } = req.params;
        let student = await Student.findById(studentId);

        if (!student) res.status(400).json({ msg: "Student Not Found" });

        await Student.remove(student);

        res.status(200).json({msg: ""})
        
    } catch (error) {
        res.status(400).json(error.msg);
    }

};
const updateStudent = async (req, res) => {
      try {

          const{studentId} = req.params;
         let student = await Student.findById(studentId);

        if(!student) res.status(400).json({msg: "Student Not Found"});

        student = await Student.findByIdAndUpdate(studentId, req,body, {new:true});

        res.status(200).json(student);
          
      } catch (error) {
          res.status(400).json(error.msg); 
      };
};


module.exports = {
    getAllStudents,
    getSingleStudent,
    // RegStudent,
    deleteStudent,
    updateStudent
}