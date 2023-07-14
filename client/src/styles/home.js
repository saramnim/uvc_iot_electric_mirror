import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30%;
  margin-top: 10vh;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10vw;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  word-break: keep-all;
  &:hover {
    color: black;
    scale: 1.25;
  }
`;

export const URL = styled(Link)`
  width: 100%;
  /* background-color: aqua; */
`;

export const Weather = styled.div`
  font-size: 25px;
`;
