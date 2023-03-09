const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${min}:${sec}`;

}

getClock();
setInterval(getClock, 1000);

// padStart & padEnd
// String에 사용가능, 주어진 길이만큼 지정한 문자열로 채워 새로운 문자열 반환
// "1".padStart(2, "0");