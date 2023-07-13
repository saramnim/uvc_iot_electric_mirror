const Temp = require("../models/temp");

class tempDAO {
  static async getTemps() {
    try {
      const temps = await Temp.find();
      return temps;
    } catch (error) {
      throw new Error("Failed to fetch temps from database");
    }
  }
}

module.exports = tempDAO;
