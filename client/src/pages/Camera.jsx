import React, { useEffect, useRef, useState } from "react";
import { Back, Container, VideoBox, Video, Data, Poke } from "../styles/camera";
import HomePage from "./Home";
import { loadImage, startCamera, tempData } from "../services/cameraService";
// import { getGif } from "../services/pokemon";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import html2canvas from "html2canvas";
import saveAs from "file-saver";

const Camera = () => {
  const divRef = useRef < HTMLDivElement > null;
  const videoRef = useRef(null);
  // const canvasRef = useRef(null);
  const [temp, setTemp] = useState([]);
  const [poke, setPoke] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const pokeImg = await getGif();
        const randomIndex = Math.floor(Math.random() * 649);
        const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${randomIndex}.gif`;
        setPoke(pokeImg);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
    tempData(setTemp);
  }, []);

  const captureImage = () => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, "captured-image.png");
      });
    });
  };

  return (
    <Container>
      <Back to="/" element={<HomePage />}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Back>
      <VideoBox id="capture">
        <Video
          autoPlay
          playsInline
          src="video/video1.mp4"
          type="video/mp4"
        ></Video>
        <Poke src={poke} alt="poke" sizes="150px" />
        <Data>
          우리집 <br />
          온도 = {temp.Temp}
          <br />
          습도 = {temp.Humidity}
        </Data>
      </VideoBox>
      <button onClick={captureImage}>Capture</button>
    </Container>
  );
};

export default Camera;
