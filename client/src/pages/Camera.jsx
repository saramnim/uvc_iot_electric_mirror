import React, { useEffect, useRef, useState } from "react";
import {
  Back,
  Container,
  VideoBox,
  Video,
  Data,
  Poke,
  Capture,
} from "../styles/camera";
import HomePage from "./Home";
import { loadImage, startCamera, getData } from "../services/cameraService";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import html2canvas from "html2canvas";
import saveAs from "file-saver";
import { pokeIf } from "../util/pokeIf";

const Camera = () => {
  const videoRef = useRef(null);
  const [data, setData] = useState([]);
  const [poke, setPoke] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData(setData);
  }, []);

  const temp = data.length > 1 ? data[1].value : 0;
  const humi = data.length > 0 ? data[0].value : 0;
  // const temp = 30;
  // const humi = 10;

  useEffect(() => {
    const fetchPoke = async () => {
      try {
        // const randomIndex = Math.floor(Math.random() * 649);
        const randomIndex = pokeIf(temp, humi);
        // const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${randomIndex}.gif`;
        const pokeImg = `gif/${randomIndex}.gif`;
        setPoke(pokeImg);
      } catch (e) {
        console.error(e);
      }
    };
    const fetchData = async () => {
      try {
        await getData(setData);
        setIsLoading(false);
        fetchPoke();
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [temp, humi]);

  if (isLoading) {
    return <div>Loading...</div>; // 로딩 상태를 표시하는 컴포넌트를 반환
  }

  const captureImage = () => {
    const capture = document.querySelector("#capture");
    // capture.style.width = "1000px";
    // capture.style.height = "1024px";
    html2canvas(capture).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, "captured-image.png");
      });
    });
    capture.style.width = "auto";
  };

  return (
    <div>
      <Container id="capture">
        <Back to="/" element={<HomePage />}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Back>
        <VideoBox>
          <Video autoPlay playsInline src="video/video1.mp4" type="video/mp4" />
          {/* <video ref={videoRef} autoPlay playsInline /> */}
          <Poke id="poke" src={poke} alt="poke" sizes="150px" />
          <Data>
            우리집 <br />
            온도 = {temp}
            <br />
            습도 = {humi}
          </Data>
        </VideoBox>
      </Container>
      <Capture onClick={captureImage}>●</Capture>
    </div>
  );
};

export default Camera;
