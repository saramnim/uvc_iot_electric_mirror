const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketIO = require("socket.io");
const RaspiCam = require("raspicam");
const temperatureRoutes = require("./src/routes/temp");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

dotenv.config();
const { MONGO_URL } = process.env;
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

app.use(cors());
app.use(express.json());
app.use("/temp", temperatureRoutes);

// const camera = new RaspiCam({
//   mode: "photo",
//   output: "-",
//   encoding: "jpg",
//   timeout: 0, // 무한히 촬영
// });

// camera.on("read", (data) => {
//   io.emit("imageData", data);
// });

// camera.start();

// io.on("connection", (socket) => {
//   console.log("클라이언트 연결");

//   socket.on("disconnect", () => {
//     console.log("클라이언트 연결 종료");
//   });
// });

const port = 8081;
server.listen(port, () => {
  console.log(`서버가 ${port} 포트에서 실행 중입니다.`);
});
