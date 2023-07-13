import React, { useState, useEffect } from "react";
import { URL, Title } from "../styles/home";
import Camera from "./Camera";
import { getData } from "../services/weather";
import Loading from "../components/Loading";

const HomePage = () => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData(setWeather);
  }, []);
  const TMP = weather ? weather.TMP?.[0]?.fcstValue : 0;
  const PTY = weather ? weather.PTY?.[0]?.fcstValue : 0;
  const POP = weather ? weather.POP?.[0]?.fcstValue : 0;
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        await getData(setWeather);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, [TMP, PTY, POP]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <URL to="/camera" element={<Camera />}>
      <Title>화면을 클릭해주세요.</Title>
      {TMP && (
        <div>
          <h2>Current Weather</h2>
          <h3>현재 바깥 온도: {TMP}</h3>
          <h3>
            현재 강수 확률: {PTY}가 {POP}%
          </h3>
        </div>
      )}
    </URL>
  );
};

export default HomePage;
