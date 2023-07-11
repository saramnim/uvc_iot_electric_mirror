const Temp = require("../models/temp");

class tempDAO {
  static async getTemps() {
    try {
      const temps = await Temp.find({
        collection: "seneor",
      });
      console.log(temps);
      return temps;
    } catch (error) {
      throw new Error("Failed to fetch temps from database");
    }
  }
}

module.exports = tempDAO;
