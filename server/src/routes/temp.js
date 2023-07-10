const express = require("express");
const tempDAO = require("../dao/temp");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const temperatures = await tempDAO.getTemp();
    res.json(temperatures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
