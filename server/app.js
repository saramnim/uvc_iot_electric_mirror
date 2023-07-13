const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const saveRouter = require("./src/routes/save");
const temp = require("./src/routes/temp");
const weather = require("./src/routes/weather");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const server = http.createServer(app);

// mongoose
//   .connect("mongodb://root:1234@127.0.0.1:27017/admin", {
//     dbName: "IOT",
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("몽고디비에 연결되었습니다.");
//   })
//   .catch((error) => {
//     console.error("몽고디비 연결 오류:", error);
//   });
dotenv.config();
const { MONGO_URL } = process.env;
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/save", saveRouter);
app.use(bodyParser.json());
app.use("/temp", temp);
app.use("/weather", weather);

const port = 8081;
server.listen(port, () => {
  console.log(`서버가 ${port} 포트에서 실행 중입니다.`);
});
