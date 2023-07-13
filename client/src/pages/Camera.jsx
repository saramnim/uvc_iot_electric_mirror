import React, { useEffect, useRef } from "react";

const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startStreaming = async () => {
      const video = videoRef.current;

      try {
        // 비디오 스트림 가져오기
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        // 비디오 요소에 스트림 연결
        video.srcObject = stream;

        // 비디오 재생
        video.play();
      } catch (error) {
        console.error("Failed to start video streaming:", error);
      }
    };

    startStreaming();
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        style={{ width: "100%", height: "auto" }}
        autoPlay
        muted
      />
    </div>
  );
};

export default Camera;

// const Camera = () => {
//   return (
//     <div>
//       <a
//         href="http://192.168.0.72:8080/video_feed"
//         target="_blank"
//         rel="noreferrer"
//       >
//         Camera
//       </a>
//     </div>
//   );
// };

// export default Camera;
