const { Schema, model } = require("mongoose");

const notificationsSchema = new Schema(
  {
    senderId: {
      type: String,
      
    },
    receiverId : {
      type : Strig,
    },
    message : {
        type: String,
    },
});


module.exports = model("Notifications", notificationsSchema);