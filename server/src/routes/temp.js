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

module.exports = router;
