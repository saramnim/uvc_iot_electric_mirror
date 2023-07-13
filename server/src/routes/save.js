const express = require("express");
const saveService = require("../services/save");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body.data;
    const temp = await saveService.saveData(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
