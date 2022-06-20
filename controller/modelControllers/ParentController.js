const Parent = require("../../models/Parent");
const bcrypt = require("bcrypt");



const createParent = async (req, res) => {

    try {

        if(!req.body) return res.status(400).json({msg : "Pls, input all fileds correctly."});

        const {value} = req.body;

        const hashPassword = await bcrypt.hash(value.password, 10);

        const parent  =  Parent({
            name : value.name,
            address : value.address,
            phoneNumber : value.phoneNumber,
            occupation : value.occupation,
            email : value.email,
            password : hashPassword
        });

        parent.children.push = student._Id;

        await parent.save()

        res.status(201).json({data : parent})

    } catch (error) {
        console.log(error)
        res.status(400).json(error.msg);
    };
};


const getAllParents = async (req, res) => {

    try {
        const parents = await Parent.find();
        res.status(200).json({data : parents});
    } catch (error) {
        res.status(400).json(error.msg);
    };
};

const getsingleParent = async (req, res) => {

    try {

        const {parentId} = req.params;
        const parent = await Parent.findById(parentId);

        if(!parent) return res.status(400).json({msg : "Parent not Fund"});

        res.status(200).json({data : parent});
    
    } catch (error) {
        res.status(400).json(error.msg);
    };
};


const deleteParent = async ( req, res) => {

    try {
        
        const {parentId} = req.params;
    
        const parent = await Parent.findById(parentId);
        if(!parent) return res.status(400).json({msg : "Parent not Found"});
    
        await Parent.findByIdAndDelete(parentId);
    
        res.status(200).json({msg : "Deleted Successfully"});

    } catch (error) {
        res.status(400).json(err.msg);
    };
};

const updateParent = async (req, res) => {

    try {
        
        const {parentId} = req.params;
    
        if(!parent) return res.status(400).json({msg: " Parent Not Found"});
    
        const parent = await Parent.findByIdAndUpdate(parentId, req.body, {new : true});
    
        res.status(200).json({data : parent});

    } catch (error) {
        res.status(400).json(err.msg);
    };

};




module.exports = {
    createParent,
    getAllParents,
    getsingleParent,
    deleteParent,
    updateParent   
};
