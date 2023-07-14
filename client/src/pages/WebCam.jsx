import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import html2canvas from "html2canvas";
import saveAs from "file-saver";
import {
  Back,
  Capture,
  Container,
  Data,
  Poke,
  Talk,
  VideoBox,
} from "../styles/camera";
import HomePage from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { pokeIf } from "../util/pokeIf";
import { getData } from "../services/cameraService";
import Loading from "../components/Loading";

const Web = () => {
  const [data, setData] = useState([]);
  const [poke, setPoke] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [talk, setTalk] = useState("");
  const [filter, setFilter] = useState("`");

  const temp = data.length > 1 ? data[1].value : 0;
  const humi = data.length > 0 ? data[0].value : 0;
  useEffect(() => {
    const fetchPoke = async () => {
      try {
        const randomIndex = pokeIf(temp, humi);
        const pokeImg = `gif/${randomIndex[0]}.gif`;
        const tell = randomIndex[1];
        const backimg = randomIndex[2];
        setPoke(pokeImg);
        setTalk(tell);
        setFilter(backimg);
        console.log(pokeIf(temp, humi, setPoke, setTalk, setFilter));
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
    html2canvas(capture).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, "captured-image.png");
      });
    });
    // window.location.href = "/webcam";
  };
  return (
    <Container>
      <div id="capture">
        <Back to="/" element={<HomePage />}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Back>
        <VideoBox>
          <Webcam
            id="webcam"
            audio={false}
            mirrored={true}
            style={{
              width: "100%",
              height: "100%",
              //   transform: "rotateY(180deg)",
              // filter,
            }}
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
      </div>
      <Capture onClick={captureImage}>●</Capture>
    </Container>
  );
};

export default Web;
