// dao/tempDAO.js
const temp = require("../models/temp");

class tempDAO {
  static async getTemps() {
    try {
      const temps = await temp.find({
        collection: "test_01",
      });
      return temps;
    } catch (error) {
      throw new Error("Failed to fetch temps from database");
    }
  }
}

module.exports = tempDAO;
