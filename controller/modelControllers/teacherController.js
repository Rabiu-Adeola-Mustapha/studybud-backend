const bcrypt = require("bcrypt");
const Teacher = require("../../models/teacher.model");

const getAllTeachers = async (req, res) => {

    try {
        
        const teachers = await Teacher.find();

        res.status(200).json(teachers);

    } catch (error) {
        res.status(400).json(error.msg);
    }
};
const getSingleTeacher = async (req, res) => {

    try {
        
        const { teacherId } = req.params;
        const teacher = await Teacher.findById(teacherId);
        if (!teacher)
          res.status(400).json({ msg: "Teacher records not found" });

     res.status(200).json(teacher);
          
    } catch (error) {
        res.status(400).json(error.msg);
    }
};

const RegTeacher = async (req, res) => {

    try {

        if(!req.body) res.status(400).json({msg: "Please Complete the techers' registration"});

        const {password} = req.body;
        const hashPassword = await bcrypt.hash(password,10);

        const teacher = await Teacher.create({
            email : req.body.eamil,
            password : hashPassword,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            RegId : req.body.RegId,
            phone : req.body.phone,
            address : req.body.address,
            level : req.body.level,
        });

        res.status(201).json({msg: "Teacher cretaed successfully. "})
        
    } catch (error) {
        res.status(400).json(error.msg);
    };
};

const deleteTeacher = async (req, res) => {

    try {
        
        const {teacherId} = req.params;
        const teacher = await Teacher.findById(teacherId);
        if(!teacher) res.status(400).json({msg: "Teacher records not found"});

        await Teacher.remove(teacher);

        res.status(200).json({msg : "Successfull"});

    } catch (error) {
        res.status(400).json(error.msg);
    }
};
const updateTeacher = async (req, res) => {

    try {
        
        const { teacherId } = req.params;
        let teacher = await Teacher.findById(teacherId);
        if (!teacher) res.status(400).json({ msg: "Teacher records not found" });
    
        teacher = await Teacher.findByIdAndUpdate(teacherId, req.body, {new:true});
    
        res.status(200).json(teacher);

    } catch (error) {
        res.status(400).json(error.msg);
    } ;   
};


module.exports = {
    getAllTeachers,
    getSingleTeacher,
    RegTeacher,
    deleteTeacher,
    updateTeacher
}
