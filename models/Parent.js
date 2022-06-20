const { model, Schema } = require("mongoose");

const parentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email : {
        type: String,
        unique : true,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    Occupation: {
      type: String,
    },
    children : [{
        type : Schema.Types.ObjectId,
        ref : "Student",
        required : true,
        default : []
    }],
  },
  { timestamps: true }
);


module.exports = model("Parent", parentSchema);
