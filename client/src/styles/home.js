import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;

  &:hover {
    color: black;
    scale: 1.25;
  }
`;

export const URL = styled(Link)`
  width: 100%;
  /* background-color: aqua; */
`;
