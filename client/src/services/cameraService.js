import socketIOClient from "socket.io-client";
import axios from "axios";

const startCamera = (videoRef, setImage) => {
  const socket = socketIOClient("http://localhost:8081");

  socket.on("imageData", (data) => {
    const blob = new Blob([data], { type: "image/jpeg" });

    if (videoRef.current && videoRef.current.srcObject === null) {
      const videoStream = new MediaStream();
      videoStream.addTrack(
        videoRef.current.captureStream().getVideoTracks()[0]
      );
      videoStream.addTrack(blob.stream().getAudioTracks()[0]);
      videoRef.current.srcObject = videoStream;
    }
  });
  return () => {
    socket.disconnect();
  };
};

const loadImage = async (setImage) => {
  try {
    const response = await fetch("/picure.jpg");
    const blob = await response.blob();
    setImage(URL.createObjectURL(blob));
  } catch (error) {
    console.error("로고 이미지 로드 실패:", error);
  }
};

const tempData = async (setTemp) => {
  try {
    const response = await axios.get("http://localhost:8081/temp");
    console.log(response.data);
    setTemp(response.data);
  } catch (error) {
    console.error("Failed to fetch temperature data:", error);
  }
};

export { startCamera, loadImage, tempData };
