export const pokeIf = (temperature, humidity, setPoke, setTalk) => {
  if (temperature < 10) {
    setPoke = 613;
    console.log("코고미");
    setTalk = "너무 추워요! 집을 따뜻하게 해주세요!";
  } else if (temperature < 20) {
    console.log("뮤");
    setPoke = 151;
    setTalk = "집이 시원하네요! 기분 좋은 하루예요^_^";
  } else if (temperature >= 20 && temperature < 25) {
    if (humidity < 30) {
      console.log("파이리");
      setPoke = 4;
      setTalk = "적당한 온도감이 좋아요! 집이 살짝 건조하네요! ㅇㅅㅇ";
    } else if (humidity >= 30 && humidity < 40) {
      console.log("구구");
      setPoke = 16;
      setTalk = "적당한 온도감이 좋아요! 오늘은 운이 좋을 것 같아요 ^_^";
    } else if (humidity >= 40 && humidity < 50) {
      console.log("이상해씨");
      setPoke = 1;
      setTalk = "적당한 온도감이 좋아요! 식물이 잘 자라겠어요 ㅎㅅㅎ";
    } else if (humidity >= 50 && humidity < 60) {
      console.log("피카츄");
      setPoke = 25;
      setTalk = "적당한 온도감이 좋아요! 집이 조금 습하네요! ㅍㅅㅍ";
    } else if (humidity >= 60) {
      console.log("꼬부기");
      setPoke = 7;
      setTalk = "적당한 온도감이 좋아요! 집이 축축해요! 혹시 빨래를 하셨나요?";
    }
  } else if (temperature >= 25 && temperature < 30) {
    if (humidity < 30) {
      console.log("불꽃숭이");
      setPoke = 390;
      setTalk = "따뜻한 날씨예요! 집이 살짝 건조하네요! ㅇㅅㅇ";
    } else if (humidity >= 30 && humidity < 40) {
      console.log("찌르꼬");
      setPoke = 396;
      setTalk = "따뜻한 날씨예요! 오늘은 운이 좋을 것 같아요^_^";
    } else if (humidity >= 40 && humidity < 50) {
      console.log("모부기");
      setPoke = 387;
      setTalk = "따뜻한 날씨예요! 식물이 잘 자라겠어요 ㅎㅅㅎ";
    } else if (humidity >= 50 && humidity < 60) {
      console.log("팽도리");
      setPoke = 393;
      setTalk = "따뜻한 날씨예요! 집이 조금 습하네요! ㅍㅅㅍ";
    } else if (humidity >= 60) {
      console.log("비버니");
      setPoke = 399;
      setTalk = "따뜻한 날씨예요! 집이 축축해요! 혹시 빨래를 하셨나요?";
    }
  } else if (temperature >= 30) {
    if (humidity < 30) {
      console.log("코터스");
      setPoke = 324;
      setTalk = "더워요! 집이 살짝 건조하네요! ㅇㅅㅇ";
    } else if (humidity >= 30 && humidity < 40) {
      console.log("아차모");
      setPoke = 255;
      setTalk = "더워요! 오늘은 운이 좋을 것 같아요^_^";
    } else if (humidity >= 40 && humidity < 50) {
      console.log("버섯꼬");
      setPoke = 285;
      setTalk = "더워요! 식물이 잘 자라겠어요 ㅎㅅㅎ";
    } else if (humidity >= 50 && humidity < 60) {
      console.log("물짱이");
      setPoke = 258;
      setTalk = "더워요! 집이 조금 습하네요! ㅍㅅㅍ";
    } else if (humidity >= 60) {
      console.log("질퍽이");
      setPoke = 88;
      setTalk = "더워요! 집이 축축해요! 어항 속에 갇힌 기분이네요 ㅠㅅㅠ";
    }
  }
  return [setPoke, setTalk];
};
