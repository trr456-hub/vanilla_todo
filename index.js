const todoInput = document.querySelector(".todoInput");
const addTodo = document.querySelector("#addTodo");
const todoList = document.querySelector(".todo");

let arr = [];

function deleteTodo(event) {
  const li = event.target.parentNode;

  arr = arr.filter((value) => value.id !== Number(li.id));
  li.remove();
}

function updateTodo(event) {
  const li = event.target.parentNode;
  const h3Value = li.querySelector("h3").innerText;
  const input = document.createElement("input");
  const button = document.createElement("button");

  input.type = "text";
  input.value = h3Value;
  button.innerText = "수정";
  li.appendChild(input);
  li.appendChild(button);
}

function paintTodo(todoObj) {
  let li = document.createElement("li");
  let h3 = document.createElement("h3");
  let button = document.createElement("button");
  let button2 = document.createElement("button");

  li.id = todoObj.id;
  h3.innerText = todoObj.text;
  button.innerText = "삭제";
  button2.innerText = "수정";

  todoList.appendChild(li);
  li.appendChild(h3);
  li.appendChild(button);
  li.appendChild(button2);

  button.addEventListener("click", deleteTodo);
  button2.addEventListener("click", updateTodo);
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
