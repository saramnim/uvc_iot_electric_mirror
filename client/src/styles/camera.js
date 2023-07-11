import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  /* height: 100vh; */
  color: white;
`;

export const VideoBox = styled.div`
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Video = styled.video`
  width: 100%;
  height: 100vh;
`;

export const Data = styled.div`
  background-image: url("img/memo2.jpg");
  background-size: 10px;
  z-index: 2;
  top: 90vh;
  left: 10vw;
  position: absolute;
  color: black;
`;

export const Back = styled(Link)`
  position: absolute;
  color: black;
  justify-content: center;
  z-index: 2;
  left: 5vw;
  top: 3vh;
`;

export const Poke = styled.img`
  position: absolute;
  top: 80vh;
  right: 10vw;
`;
