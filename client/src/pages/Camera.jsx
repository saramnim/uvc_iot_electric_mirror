import React, { useEffect, useState } from "react";
import {
  Back,
  Container,
  VideoBox,
  Video,
  Data,
  Poke,
  Capture,
  Talk,
} from "../styles/camera";
import HomePage from "./Home";
import { getData } from "../services/cameraService";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import html2canvas from "html2canvas";
import saveAs from "file-saver";
import { pokeIf } from "../util/pokeIf";
import Loading from "../components/Loading";

const Camera = () => {
  const [data, setData] = useState([]);
  const [poke, setPoke] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [talk, setTalk] = useState("");

  const temp = data.length > 1 ? data[1].value : 0;
  const humi = data.length > 0 ? data[0].value : 0;

  useEffect(() => {
    const fetchPoke = async () => {
      try {
        const randomIndex = pokeIf(temp, humi);
        const pokeImg = `gif/${randomIndex[0]}.gif`;
        const tell = randomIndex[1];
        setPoke(pokeImg);
        setTalk(tell);
        console.log(pokeIf(temp, humi, setPoke, setTalk));
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
    return <Loading />;
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
          <Video
            src="http://192.168.0.72:8000/stream.mjpg"
            alt="Server Image"
          />
          <Poke id="poke" src={poke} alt="poke" sizes="150px" />
          <Talk>{talk}</Talk>
          <Data>
            지금 우리집 <br />
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
