import axios from "axios";

const getData = async (setWeather) => {
  try {
    const response = await axios.post("http://localhost:8081/weather", {
      numOfRows: 10,
      pageNo: 1,
      dataType: "JSON",
      base_date: "",
      base_time: "0500",
      nx: 60,
      ny: 127,
    });
    const weatherData = response.data.result;
    setWeather(weatherData);
  } catch (error) {
    console.error("Failed to fetch temperature data:", error);
  }
};

export { getData };
