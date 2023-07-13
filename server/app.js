const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketIO = require("socket.io");
const RaspiCam = require("raspicam");
const temperatureRoutes = require("./src/routes/temp");
const saveRouter = require("./src/routes/save");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// 몽고디비에 연결
mongoose
  .connect("mongodb://root:1234@127.0.0.1:27017/admin", {
    dbName: "IOT",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("몽고디비에 연결되었습니다.");
  })
  .catch((error) => {
    console.error("몽고디비 연결 오류:", error);
  });

app.use(express.json());
app.use("/temp", temperatureRoutes);
app.use("/save", saveRouter);

// 카메라 설정
const camera = new RaspiCam({
  mode: "photo",
  output: "./image.jpg",
  encoding: "jpg",
  timeout: 0, // 무한히 촬영
});

// 소켓 연결 시 처리
io.on("connection", (socket) => {
  console.log("클라이언트 연결");
  // setInterval(() => {
  //   io.emit("stream");
  // }, 1000);
  // 이미지 촬영 이벤트 처리
  socket.on("capture", () => {
    camera.start();
  });

  // 카메라로부터 이미지 읽어오는 이벤트 처리
  camera.on("read", (data) => {
    socket.emit("image", data.toString("base64"));
  });
  socket.on("image", (data) => {
    console.log("수신한 데이터:", data);
    // 수신한 데이터를 처리하거나 다른 작업 수행
  });

  // 소켓 연결 종료 시 처리
  socket.on("disconnect", () => {
    console.log("클라이언트 연결 종료");
  });
});

const port = 8081;
server.listen(port, () => {
  console.log(`서버가 ${port} 포트에서 실행 중입니다.`);
});
