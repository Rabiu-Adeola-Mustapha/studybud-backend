const {Schema, model} = require("mongoose");


const studentSchema = new Schema ({

  firstName : {
    type: String,
  },
  lastName : {
    type: String,
  },
  address : {
    type: String,
  },
  level : {
    type : Schema.Types.ObjectId,
    ref : "Level",
  },
  parent : {
    type : Schema.Types.ObjectId,
    ref : "Parent",
  },
  subjects : [{
    type : Schema.Types.ObjectId,
    ref : "Subject"
  }],
  // contemplating on deleting this.
  assesment : {
    type : Schema.Types.ObjectId,
    ref : "Assesment"
  }
},{timestamps: true});

module.exports = model("Student", studentSchema);

// const studentSchema = new Schema(
//   {
//     email: {
//       type: String,
//       // required: [true, "PLease enter your email"],
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     firstName: {
//       type: String,
//     },
//     lastName: {
//       type: String,
//     },
//     RegId: {
//       type: String,
//       unique: true,
//       // required: true,
//     },
//     // level: {
//     //   type: Schema.Types.ObjectId,
//     //   ref: "Level",
//     // },
//     guardianMail: {
//       type: String,
//     },
//     guardianPhone: {
//       type: String,
//     },
//     address: {
//       type: String,
//     },
//     attendance: {
//       type: Schema.Types.ObjectId,
//       ref: "Attendance",
//     },
//     avatar: {
//       type: String,
//     },

//     assement: [],
//     notifications: [],
//   },
//   { timestamps: true }
// );

// module.exports = model("Student", studentSchema);
