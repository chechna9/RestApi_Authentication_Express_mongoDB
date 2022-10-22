const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user : {
      type : mongoose.Schema.Types.ObjectId,
      required:true,
      ref:'User',//name of the model
    },
    text: {
      type: String,
      required: [true, "Please add a text value (schema err)"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Goal',goalSchema);
