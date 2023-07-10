import React, { useEffect, useRef, useState } from "react";
import { Back, Container, Video } from "../styles/camera";
import HomePage from "./Home";
import { loadImage, startCamera, tempData } from "../services/cameraService";

const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    //   startCamera(videoRef, setImage);
    //   loadImage(setImage);
    tempData(setTemp);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawLogo = () => {
      if (image) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, canvas.height - 50, 50, 50);
      }
    };

    const interval = setInterval(drawLogo, 100);

    return () => {
      clearInterval(interval);
    };
  }, [image]);

  return (
    <Container>
      <Video>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={{ display: "none" }}
        />
        <canvas ref={canvasRef} width={640} height={480} />
        <Back to="/" element={<HomePage />}>
          뒤로가기
        </Back>
      </Video>
    </Container>
  );
};

export default Camera;
