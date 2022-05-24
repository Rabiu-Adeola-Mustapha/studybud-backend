const { Schema, model } = require("mongoose");

const assesmentSchema = new Schema(
  {
      term : {
          type : String,
          enum : ["firstTerm", "secondTerm", "thirdTerm"],
          required : true
      },
      comment : {
          type: String
      },
    
      student : {
          type: Schema.Types.ObjectId,
          ref: "Student",
      },
      score : {
          type : Number,
          default : 0,
      },
      totalScore : {
          type : Number,
          default : 100
      },

});


module.exports = model("Assesmemt" , assesmentSchema);