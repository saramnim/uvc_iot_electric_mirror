import React from "react";
import { URL, Title } from "../styles/home";
import Camera from "./Camera";

const HomePage = () => {
  return (
    <URL to="/camera" element={<Camera />}>
      <Title>화면을 클릭해주세요.</Title>
    </URL>
  );
};

export default HomePage;
