const express = require("express");
const TempService = require("../services/temp");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const temp = await TempService.getTemp();
    res.json(temp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { data } = req.body;
    const tempData = { data };
    const savedTemp = await TempService.createTemp(tempData);
    res.status(201).json(savedTemp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
