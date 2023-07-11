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
}

module.exports = TempService;
