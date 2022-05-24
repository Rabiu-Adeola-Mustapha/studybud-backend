const {Schema, model} = require("mongoose");

const teacherSchema = new Schema(
  //techaer sending notifications
  // teacher grading assesment
  {
    email: {
      type: String,
      required: [true, "Please enter your email"],
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    phone: {
      type: String,
    },
    gender:{
        type : String,
    },
    address: {
      type: String,
    },
    avatar: {
      type: String,
    },
    students : [{
      type : Schema.Types.ObjectId,
      ref : "Student"
    }],
  },
  { timestamps: true }
);

module.exports = model("Teacher", teacherSchema);
