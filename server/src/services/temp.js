const tempDAO = require("../dao/temp");

class TempService {
  static async getTemperatures() {
    try {
      const temp = await tempDAO.getTemp();
      console.log("Temperature Data:", temp);
      return temp;
    } catch (error) {
      throw new Error("Failed to fetch temperatures from database");
    }
  }
}

module.exports = TempService;
