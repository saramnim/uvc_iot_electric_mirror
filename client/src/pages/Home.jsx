import React, { useState, useEffect } from "react";
import { Container, Box, URL, Title, Weather } from "../styles/home";
import Camera from "./Camera";
import { getTemp, getHumi } from "../services/weather";
import Loading from "../components/Loading";
import Web from "./WebCam";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(null);
  const [humi, setHumi] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const temp = await getTemp();
        setTemp(temp);
        const humi = await getHumi();
        setHumi(humi);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Box>
        <Weather>
          <h2>오늘 날씨</h2>
          <h3>현재 바깥 온도: {temp}</h3>
          <h3>현재 바깥 습도: {humi}%</h3>
        </Weather>
      </Box>
      <Box>
        <URL to="/camera" element={<Camera />}>
          <Title>우리집 확인하기</Title>
        </URL>
        <URL to="/webcam" element={<Web />}>
          <Title>내 캠으로 포켓몬과 사진찍기</Title>
        </URL>
      </Box>
    </Container>
  );
};

export default HomePage;
