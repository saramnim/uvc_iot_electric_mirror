const tempDAO = require("../dao/temp");

class TempService {
  static async getTemp() {
    try {
      const temp = await tempDAO.getTemps();
      return temp;
    } catch (error) {
      throw new Error("Failed to fetch temps from database-services");
    }
  }
  static async createTemp(tempData) {
    try {
      const savedTemp = await tempDAO.createTemp(tempData);
      return savedTemp;
    } catch (error) {
      throw new Error("Failed to create temp in the database-services");
    }
  }
}

module.exports = TempService;
