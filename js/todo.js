const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];


function saveToDos() {
  // localStorage.setItem("todo", toDos);                    //  a, b, c           이렇게 저장해줌 (localStorage에는 string만 저장가능 -> 배열을 넣어도 문자열로 들어감)
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));   // ["a", "b", "c"]    배열모양 그대로 string으로 저장해줌

  // JSON.stringify()  JavaScript 값이나 객체를 JSON 문자열로 변환. 선택적으로, replacer를 함수로 전달할 경우 변환 전 값을 변형할 수 있고, 배열로 전달할 경우 지정한 속성만 결과에 포함
  // JSON.parse()      JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성.  선택적으로, reviver 함수를 인수로 전달할 경우, 결과를 반환하기 전에 변형할 수 있음
}

function deleteTodo(event) {
  // event.path[1].style.background = "blue"; 그냥 내가 해본거

  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));  // toDo.id는 number,  li.id는 string
  saveToDos();

}

function paintToDo(todoThing) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  
  li.id = todoThing.id;
  span.innerText = todoThing.text;
  button.innerText = "X";

  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
  event.preventDefault();

  const newTodo = toDoInput.value;
  toDoInput.value = "";
  
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // 인자 안써주면 첫번째 argument로 element
}