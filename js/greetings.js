const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";   // 일반적으로 string만 포함된 변수는 대문자로 표기
const USERNAME_KEY = "username";     // 반복되는 string은 변수로 빼주면 오타나더라도 변수가 잘못된건 콘솔에서 확인 가능 (그냥 string이 틀린 건 찾기 힘드니까) 

function onLoginSubmit(event) {
  // console.log(event);  // 모든 eventListener function의 첫번째 argument는 방금 실행된 event에 대한 정보 (브라우저가 event를 실행하면서 event에 대한 정보를 줌)
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);

}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;     // "Hello " + username
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);

} else {
  paintGreetings(savedUsername);
}