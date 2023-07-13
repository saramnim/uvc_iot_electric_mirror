const Temp = require("../models/temp");

class tempDAO {
  static async getTemps() {
    try {
      const temps = await Temp.find().sort({ _id: -1 }).limit(2);
      console.log(temps);
      return temps;
    } catch (error) {
      throw new Error("Failed to fetch temps from database");
    }
  }
  static async createTemp(tempData) {
    try {
      const { data } = tempData;
      const savedTemp = await Temp.insertMany(data);
      return savedTemp;
    } catch (error) {
      throw new Error("Failed to create temp in the database");
    }
  }
}

module.exports = tempDAO;
