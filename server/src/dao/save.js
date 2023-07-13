const sensor = require("../models/save");

const saveDAO = {
  async saveDatas(data) {
    try {
      return await sensor.create(data);
    } catch (error) {
      throw new Error("실패");
    }
  },
};

module.exports = saveDAO;
