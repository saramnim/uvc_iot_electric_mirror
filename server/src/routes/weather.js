// const express = require("express");
// const WeatherService = require("../services/weather");

// const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const weather = await WeatherService.getWeather();
//     res.json(weather);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const weather = await WeatherService.fetchWeatherData();
//     res.status(201).json(weather);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
const express = require("express");

const router = express.Router();
const weatherUtil = require("../lib/weather");

// 등록
router.post("/", async (req, res) => {
  try {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const date = String(currentDate.getDate()).padStart(2, "0");
    const base_date = year + month + date;
    const params = {
      numOfRows: req.body.numOfRows,
      pageNo: req.body.pageNo,
      dataType: req.body.dataType,
      base_date,
      base_time: req.body.base_time,
      nx: req.body.nx,
      ny: req.body.ny,
    };
    // 비즈니스 로직 호출
    const result = await weatherUtil.getData(params);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
