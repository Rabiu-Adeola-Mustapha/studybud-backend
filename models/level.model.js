const { Schema, model } = require("mongoose");

const levelSchema = new Schema(
  {
    name: {
      type: String,
      enum: ["basicOne", "basicTwo", "basicThree"],
    },
    subjects : [{
      type : Schema.Types.ObjectId,
      ref : "Subject"
    }],
    teacher : {
      type : Schema.Types.ObjectId,
      ref: "Teacher"

    },
    students : [{
      type : Schema.Types.ObjectId,
      ref: "Student"
    }],
  },
  { timestamps: true }
);

module.exports = model("Level", levelSchema);
