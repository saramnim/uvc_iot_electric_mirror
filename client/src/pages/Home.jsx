import React, { useState, useEffect } from "react";
import { URL, Title } from "../styles/home";
import Camera from "./Camera";
import { getData } from "../services/weather";

const HomePage = () => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        await getData(setWeather);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, []);
  console.log(weather);
  return (
    <URL to="/camera" element={<Camera />}>
      <Title>화면을 클릭해주세요.</Title>
      {weather && (
        <div>
          <h2>Current Weather</h2>
          <h3>현재 바깥 온도: {weather.TMP[0].fcstValue}</h3>
          <h3>
            현재 강수 확률: {weather.PTY[0].fcstValue}가{" "}
            {weather.POP[0].fcstValue}%
          </h3>
        </div>
      )}
    </URL>
  );
};

export default HomePage;
