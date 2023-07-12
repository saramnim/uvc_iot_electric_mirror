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
// import { getGif } from "../services/pokemon";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import html2canvas from "html2canvas";
import saveAs from "file-saver";
// import io from "socket.io-client";

// const socket = io("http://localhost:8000");

const Camera = () => {
  const videoRef = useRef(null);
  // const canvasRef = useRef(null);
  const [data, setData] = useState([]);
  const [poke, setPoke] = useState("");

  useEffect(() => {
    const fetchPoke = async () => {
      try {
        // const pokeImg = await getGif();
        const randomIndex = Math.floor(Math.random() * 649);
        const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${randomIndex}.gif`;
        setPoke(pokeImg);
        // const playStream = (stream) => {
        //   if (videoRef.current) {
        //     videoRef.current.srcObject = stream;
        //     videoRef.current.play();
        //   }
        // };
        // socket.on("stream", (stream) => {
        //   playStream(stream);
        // });

        // return () => {
        //   socket.off("stream");
        // };
      } catch (e) {
        console.error(e);
      }
    };
    fetchPoke();
    getData(setData);
  }, []);

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
          <Poke src={poke} alt="poke" sizes="150px" />
          <Data>
            우리집 <br />
            온도 = {data[1].value}
            <br />
            습도 = {data[0].value}
          </Data>
        </VideoBox>
      </Container>
      <Capture onClick={captureImage}>●</Capture>
    </div>
  );
};

export default Camera;
