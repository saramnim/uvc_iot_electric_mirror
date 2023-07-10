import styled from "styled-components";
import { Link } from "react-router-dom";
export const Title = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: black;
    scale: 1.25;
  }
`;

export const URL = styled(Link)``;
