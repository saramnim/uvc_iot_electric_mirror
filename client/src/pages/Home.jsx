import React, { useState, useEffect } from "react";
import { Container, URL, Title } from "../styles/home";
import Camera from "./Camera";
import { getData } from "../services/weather";
import Loading from "../components/Loading";
import Web from "./WebCam";

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
    <Container>
      <URL to="/camera" element={<Camera />}>
        <Title>우리집 확인하기</Title>
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
      <URL to="/webcam" element={<Web />}>
        <Title>내 캠으로 포켓몬과 사진찍기</Title>
      </URL>
    </Container>
  );
};

export default HomePage;
