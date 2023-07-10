import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
`;

export const Video = styled.div`
  width: 100%;
  height: 95%;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Back = styled(Link)`
  color: black;
  justify-content: center;
`;
