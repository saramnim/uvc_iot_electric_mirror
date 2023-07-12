const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketIO = require("socket.io");
const RaspiCam = require("raspicam");
const temp = require("./src/routes/temp");
const weather = require("./src/routes/weather");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const server = http.createServer(app);
// const io = socketIO(server);

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
app.use(bodyParser.json());
app.use("/temp", temp);
app.use("/weather", weather);

// const camera = new RaspiCam({
//   mode: "video",
//   output: "-",
//   encoding: "mp4",
//   timeout: 0, // 무한히 촬영
// });

// camera.on("read", (err, timestamp, filename) => {
//   if (!err && filename) {
//     const streamData = {
//       type: "video",
//       data: filename,
//     };
//     io.emit("stream", streamData);
//   }
// });

// io.on("connection", (socket) => {
//   console.log("클라이언트 연결");

//   socket.on("disconnect", () => {
//     console.log("클라이언트 연결 종료");
//   });
// });

// camera.start();

const port = 8081;
server.listen(port, () => {
  console.log(`서버가 ${port} 포트에서 실행 중입니다.`);
});
