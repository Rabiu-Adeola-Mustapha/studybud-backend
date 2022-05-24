const { Schema, model } = require("mongoose");

const subjectSchema = new Schema({
  subjectName: {
    type: String,
    trim:true,
    
  },
  student:[ {
    //many-many subject - student
    type : Schema.Types.ObjectId,
    ref : "Student"
  }],
  assesment: {
    // one to one assement and subject
    type: Schema.Types.ObjectId,
    ref : "Student"
  },

  });

module.exports = model("Subject", subjectSchema);
