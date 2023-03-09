//////////////////////////////////////////////////////////////////////////////
// object & function

const player = {
  name: "btob",
  points: 321,
  fat: true,
  sayHello: function (otherPersonsName) {
    console.log("hello! " + otherPersonsName);
  }
};

console.log(player);
console.log(player.name);   // console.log(player["name"]); 로도 씀.

player.points = 226;
player.points = player.points + 321;
player.fan = "melody";

console.log(player);
player.sayHello("highlight");



console.log("======");
//////////////////////////////////////////////////////////////////////////////
// function return

console.log(player.sayHello("mostaX"));   // retrun값이 없으니까 undefined

const age = 29;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);
console.log(KrAge);



console.log("======");
//////////////////////////////////////////////////////////////////////////////
// if

// const userAge = parseInt(prompt("How old are you?"));    // 사용자가 답하기 전까지 여기서 javascript 코드실행이 멈춰있음

// if (isNaN(userAge) || userAge < 0) {
//   console.log("Please write a real positive number");
// } else if (userAge < 18 ) {
//   console.log("You are too young.");
// } else if (userAge >= 18 && userAge <= 50) {
//   console.log("You can drink");
// } else if (userAge > 50 && userAge <=80) {
//   console.log("You should exercise");
// } else if (userAge > 80) {
//   console.log("you can do whatever you want.")
// }




console.log("======");
//////////////////////////////////////////////////////////////////////////////
// DOM, event...

console.dir(document);  
// console.log는 요소를 HTML과 같은 트리 구조로 출력 -> DOM 요소에 대해 특별한 처리를 제
// console.dir은 요소를 JSON과 같은 트리 구조로 출력 -> DOM JS 객체의 전체 표현

const title = document.getElementById("title");
console.dir(title);
title.innerText = "Got you!";

// element 선택하기
const hellos = document.getElementsByClassName("hello");
const hi = document.getElementsByTagName("h1");
const hi2 = document.querySelector(".hi h1");   // 선택자를 css처럼 쓸 수 있음. 첫번째 element만 가져옴
const hi3 = document.querySelectorAll(".hi h1");
console.log(hellos);
console.log(hi2);
console.log(hi3);

const firstHi = document.querySelector("div.hi1 h1");
console.dir(firstHi);
firstHi.style.color = "blue";

function handleTitleClick() {
  alert("title was clicked!");
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("cpoier!");
}
function hadleWindowOffline() {
  alert("SOS no WIFI");
}
function hadleWindowOnline() {
  alert("WIFI GOOD");
}

// event 사용하는 2가지 방법
title.addEventListener("click", handleTitleClick);  // 얘는 removeEventListener를 통해 이벤트 제거 가능
title.onclick = handleTitleClick;

// window의 event들..
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", hadleWindowOffline);
window.addEventListener("online", hadleWindowOnline);


// 
const h2 = document.querySelector("h2");

function handleH2Click() {
  // const currentColor = h2.style.color;
  // let newColor;

  // if(currentColor === "blue") {
  //   newColor = "tomato";
  // } else {
  //   newColor = "blue";
  // }
  // h2.style.color = newColor;


  // const clickedClass = "clicked";
  // if(h2.classList.contains(clickedClass)) {
  //   h2.classList.remove(clickedClass);
  // } else {
  //   h2.classList.add(clickedClass);
  //   // h2.className = clickedClass;    // 기존의 class가 있던 없던 clickedClass로 세팅됨
  // }
  h2.classList.toggle("clicked");

}
h2.addEventListener("click", handleH2Click);


// event function first argument
const link = document.querySelector("a");

function handleLinkClick(event) {
  event.preventDefault();

  console.log(event); // 모든 eventListener function의 첫번째 argument는 방금 실행된 event에 대한 정보 (브라우저가 event를 실행하면서 event에 대한 정보를 줌)
  console.dir(event);

}
link.addEventListener("click", handleLinkClick);



// foreach()
const arr = ["a", "b", "c", "d"];

function hellooo(item) {
  console.log(`hello ${item}`);
}

arr.forEach(hellooo);


