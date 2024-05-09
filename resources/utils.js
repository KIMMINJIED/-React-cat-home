const EMPTY_HEART = "🤍";
const FULL_HEART = "💖";

const CAT1 = "https://cataas.com/cat/HSENVDU4ZMqy7KQ0/says/react";
const CAT2 = "https://cataas.com/cat/BxqL2EjFmtxDkAm2/says/inflearn";
const CAT3 = "https://cataas.com/cat/18MD6byVC1yKGpXp/says/JavaScript";

// 폼 검증(form validation) 로직 => 영어로 입력받아야 하는데, 사용자가 한글을 입력한 후 폼 제출을 한 경우
const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);

const jsonLocalStorage = {
  // 값을 저장할 때, JSON.stringify(value)로 셋팅
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  // 받아온 로컬스토리지 데이터를 Json으로 parse해 가져옴
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

// Open API로 고양이의 랜덤 사진을 받아오는 방법
const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";   // Open API 주소
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);    // 응답값을 받아와 response 변수에 담아주기 >> 응답값을 받아올때, json 형식으로 받아오도록
  // https://joshua1988.github.io/web-development/javascript/js-async-await/#async--await는-뭔가요
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/cat/${responseJson._id}/says/${text}`; // NOTE: API 스펙 변경으로 강의 영상과 다른 URL로 변경했습니다.
};
