const mongoose = require("mongoose");

const tempSchema = new mongoose.Schema({
  Temp: {
    type: String,
    required: true,
  },
  Humidity: {
    type: String,
    required: true,
  },
});

const Temp = mongoose.model("Temp", tempSchema);

module.exports = Temp;