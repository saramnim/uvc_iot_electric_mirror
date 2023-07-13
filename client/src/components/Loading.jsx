import React from "react";
import { Background, LoadingText } from "../styles/loading";
const Loading = () => {
  return (
    <Background>
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
      <img src="/gif/loading.gif" alt="로딩중" width="50%" />
    </Background>
  );
};

export default Loading;
