const saveDAO = require("../dao/save");

const saveService = {
  async saveData(data) {
    try {
      result = [];
      data.forEach(async (a) => {
        inserted = await saveDAO.saveDatas(a);
        result.push(inserted);
      });
      // const temp = await saveDAO.saveDatas(data);
      return result;
    } catch (error) {
      throw new Error("서비스실패");
    }
  },
};

module.exports = saveService;
