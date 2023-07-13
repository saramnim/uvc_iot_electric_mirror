export const pokeIf = (temperature, humidity, setPoke) => {
  if (temperature < 10) {
    setPoke = 613;
    console.log("코고미");
  } else if (temperature < 20) {
    console.log("뮤");
    setPoke = 151;
  } else if (temperature >= 20 && temperature < 25) {
    if (humidity < 30) {
      console.log("파이리");
      setPoke = 4;
    } else if (humidity >= 30 && humidity < 40) {
      console.log("구구");
      setPoke = 16;
    } else if (humidity >= 40 && humidity < 50) {
      console.log("이상해씨");
      setPoke = 1;
    } else if (humidity >= 50 && humidity < 60) {
      console.log("피카츄");
      setPoke = 25;
    } else if (humidity >= 60) {
      console.log("꼬부기");
      setPoke = 7;
    }
  } else if (temperature >= 25 && temperature < 30) {
    if (humidity < 30) {
      console.log("불꽃숭이");
      setPoke = 390;
    } else if (humidity >= 30 && humidity < 40) {
      console.log("찌르꼬");
      setPoke = 396;
    } else if (humidity >= 40 && humidity < 50) {
      console.log("모부기");
      setPoke = 387;
    } else if (humidity >= 50 && humidity < 60) {
      console.log("팽도리");
      setPoke = 393;
    } else if (humidity >= 60) {
      console.log("비버니");
      setPoke = 399;
    }
  } else if (temperature >= 30) {
    if (humidity < 30) {
      console.log("코터스");
      setPoke = 324;
    } else if (humidity >= 30 && humidity < 40) {
      console.log("아차모");
      setPoke = 255;
    } else if (humidity >= 40 && humidity < 50) {
      console.log("버섯꼬");
      setPoke = 285;
    } else if (humidity >= 50 && humidity < 60) {
      console.log("물짱이");
      setPoke = 258;
    } else if (humidity >= 60) {
      console.log("질퍽이");
      setPoke = 88;
    }
  }
  return setPoke;
};
