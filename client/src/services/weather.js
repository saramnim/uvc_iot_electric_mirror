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
const getTemp = async () => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=aa187983fd61ec47f96a4d448ba1bbb2`;
  const res = await axios.get(url);
  console.log(res.data.main.temp);
  return res.data.main.temp;
};
const getHumi = async () => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=aa187983fd61ec47f96a4d448ba1bbb2`;
  const res = await axios.get(url);
  console.log(res.data.main.humidity);
  return res.data.main.humidity;
};
export { getData, getTemp, getHumi };
