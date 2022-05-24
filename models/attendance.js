const { Schema, model } = require("mongoose");

const attendanceSchema = new Schema(
  {
    studentId : {
        type: String,
    },
    expected: {
      type: Number,
      
    },
    covered : {
        type: Number,
    },
    studentAttendance : {
        type: Number
    },
    academicYear : {
        type : String,
    }
});

module.exports = model("Attendance", attendanceSchema)