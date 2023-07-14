import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  color: white;
`;

export const VideoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  &.webcam {
    /* transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg); */
    transform: scale(-1);
  }
`;

export const Stream = styled.img`
  width: 100%;
  height: 100vh;
`;

export const Data = styled.div`
  /* background-image: url("img/memo2.jpg"); */
  font-size: 25px;
  background-size: 10px;
  z-index: 2;
  top: 75vh;
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
  top: 75vh;
  right: 15vw;
`;

export const Capture = styled.button`
  position: absolute;
  top: 85%;
  left: 47%;
  width: 10%;
  height: 7%;
  border-radius: 100px;
  font-size: 30px;
  text-align: center;
`;

export const Talk = styled.div`
  background-image: url("img/talk.jpg");
  position: absolute;
  font-size: 20px;
  top: 20%;
  &.camera {
    top: 90%;
    left: 10%;
    color: black;
  }
`;
