const mongoose = require("mongoose");

const tempSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Temp = mongoose.model("test_temp", tempSchema);

module.exports = Temp;
