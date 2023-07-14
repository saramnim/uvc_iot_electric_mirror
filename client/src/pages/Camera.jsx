import React, { useEffect, useState } from "react";
import {
  Back,
  Container,
  VideoBox,
  Video,
  Data,
  Poke,
  Talk,
} from "../styles/camera";
import HomePage from "./Home";
import { getData } from "../services/cameraService";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pokeIf } from "../util/pokeIf";
import Loading from "../components/Loading";

const Camera = () => {
  const [data, setData] = useState([]);
  const [poke, setPoke] = useState("");
  const [filter, setFilter] = useState("`");
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
        const backimg = randomIndex[2];
        setPoke(pokeImg);
        setTalk(tell);
        setFilter(backimg);
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

  // 필터를 동적으로 설정할 수 있도록 변수를 선언합니다.
  // 온도에 따라 필터를 설정합니다.
  return (
    <div>
      <Container>
        <Back to="/" element={<HomePage />}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Back>
        <VideoBox>
          <Video
            src="http://192.168.0.72:8000/stream.mjpg"
            alt="Server Image"
            style={{ filter }} // 동적으로 설정한 필터를 스타일 속성에 적용합니다.
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
    </div>
  );
};

export default Camera;
