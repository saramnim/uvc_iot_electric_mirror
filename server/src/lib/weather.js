const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const weatherDataConfig = {
  url: process.env.API_URL,
  key: process.env.API_KEY,
};

const weatherUtil = {
  async getData(params) {
    let result = {};
    try {
      if (params.lat && params.lng) {
        console.log(params.lat, params.lng);
        const xyConv = this.dfs_xy_conv("toXY", params.lat, params.lng);
        params.nx = xyConv.x;
        params.ny = xyConv.y;
      }

      const response = await axios.get(weatherDataConfig.url, {
        params: {
          serviceKey: weatherDataConfig.key,
          numOfRows: params.numOfRows,
          pageNo: params.pageNo,
          dataType: params.dataType,
          base_date: params.base_date,
          base_time: params.base_time,
          nx: params.nx,
          ny: params.ny,
        },
      });
      const weatherData = response.data.response?.body?.items?.item;
      if (weatherData) {
        weatherData.forEach((v) => {
          if (result[v.category] !== undefined) {
            result[v.category].push(v);
          } else {
            result[v.category] = [v];
          }
        });
      }
    } catch (err) {
      console.error("Error fetching weather data:", err);
    }
    console.log(result);
    return { result };
  },
  dfs_xy_conv(code, v1, v2) {
    const RE = 6371.00877; // 지구 반경(km)
    const GRID = 5.0; // 격자 간격(km)
    const SLAT1 = 30.0; // 투영 위도1(degree)
    const SLAT2 = 60.0; // 투영 위도2(degree)
    const OLON = 126.0; // 기준점 경도(degree)
    const OLAT = 38.0; // 기준점 위도(degree)
    const XO = 43; // 기준점 X좌표(GRID)
    const YO = 136; // 기1준점 Y좌표(GRID)

    let DEGRAD = Math.PI / 180.0;
    let RADDEG = 180.0 / Math.PI;

    let re = RE / GRID;
    let slat1 = SLAT1 * DEGRAD;
    let slat2 = SLAT2 * DEGRAD;
    let olon = OLON * DEGRAD;
    let olat = OLAT * DEGRAD;

    let sn =
      Math.tan(Math.PI * 0.25 + slat2 * 0.5) /
      Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
    let sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;
    let ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
    ro = (re * sf) / Math.pow(ro, sn);
    let rs = {};
    if (code == "toXY") {
      rs["lat"] = v1;
      rs["lng"] = v2;
      let ra = Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5);
      ra = (re * sf) / Math.pow(ra, sn);
      let theta = v2 * DEGRAD - olon;
      if (theta > Math.PI) theta -= 2.0 * Math.PI;
      if (theta < -Math.PI) theta += 2.0 * Math.PI;
      theta *= sn;
      rs["x"] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
      rs["y"] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
    } else {
      rs["x"] = v1;
      rs["y"] = v2;
      let xn = v1 - XO;
      let yn = ro - v2 + YO;
      ra = Math.sqrt(xn * xn + yn * yn);
      if (sn < 0.0) -ra;
      let alat = Math.pow((re * sf) / ra, 1.0 / sn);
      alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

      if (Math.abs(xn) <= 0.0) {
        theta = 0.0;
      } else {
        if (Math.abs(yn) <= 0.0) {
          theta = Math.PI * 0.5;
          if (xn < 0.0) -theta;
        } else theta = Math.atan2(xn, yn);
      }
      let alon = theta / sn + olon;
      rs["lat"] = alat * RADDEG;
      rs["lng"] = alon * RADDEG;
    }
    return rs;
  },
};

module.exports = weatherUtil;