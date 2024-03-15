const todoInput = document.querySelector(".todoInput");
const addTodo = document.querySelector("#addTodo");
const todoList = document.querySelector(".todo");

let arr = [];

function deleteTodo(event, li) {
  const parentLi = event.target.parentNode;

  arr = arr.filter((value) => value.id !== Number(parentLi.id));
  parentLi.remove();
}

function updateTodo(event) {
  const li = event.target.parentNode;
  const h3 = li.querySelector("h3");
  const h3Value = h3.innerText;
  const input = document.createElement("input");
  const button = document.createElement("button");

  h3.style.display = "none";
  event.target.style.display = "none";

  input.type = "text";
  input.value = h3Value;
  button.innerText = "수정";

  li.appendChild(input);
  li.appendChild(button);

  button.addEventListener("click", () => rePaintTodo(h3Value));
}

function rePaintTodo(h3Value) {
  console.log(h3Value);
}

function paintTodo(todoObj) {
  let li = document.createElement("li");
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  let button = document.createElement("button");
  let button2 = document.createElement("button");

  li.id = todoObj.id;
  h3.innerText = todoObj.text;
  button.innerText = "삭제";
  button2.innerText = "수정";

  todoList.appendChild(li);
  li.appendChild(div);
  div.appendChild(h3);
  div.appendChild(button);
  div.appendChild(button2);

  button.addEventListener("click", () => deleteTodo(li));
  button2.addEventListener("click", () => updateTodo(li));
}

function addTodoFnc(event) {
  event.preventDefault();
  const inputValue = todoInput.value;
  const todoObj = {
    text: inputValue,
    id: Date.now(),
  };
  arr.push(todoObj);
  paintTodo(todoObj);
  todoInput.value = "";
}

addTodo.addEventListener("click", addTodoFnc);
