const todoInput = document.querySelector(".todoInput");
const addTodo = document.querySelector("#addTodo");
const todoList = document.querySelector(".todo");

let arr = [];

function deleteTodo(event) {
  const li = event.target.parentNode;
  const target = li.parentNode;

  arr = arr.filter((value) => value.id !== Number(target.id));
  target.remove();
}

function updateTodo(event) {
  const contents = event.target.parentNode;
  const li = contents.parentNode;

  const div = li.querySelector("div");
  const h3 = div.querySelector("h3");
  const input = document.createElement("input");
  const button = document.createElement("button");

  div.style.display = "none";

  const h3Value = h3.innerText;
  input.type = "text";
  input.value = h3Value;
  button.innerText = "수정";

  li.appendChild(input);
  li.appendChild(button);

  button.addEventListener("click", () =>
    rePaintTodo(contents, input.value, h3)
  );
}

function rePaintTodo(contents, updateValue, h3) {
  const contentId = contents.parentNode.id;
  const updateForm = contents.parentNode;
  const index = arr.filter((value) => value.id === Number(contentId));
  index[0].text = updateValue;
  h3.innerText = updateValue;
  contents.style.display = "block";
  updateForm.removeChild(updateForm.lastChild);
  updateForm.removeChild(updateForm.lastChild);
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
  todoInput.value = "";
  arr.push(todoObj);
  paintTodo(todoObj);
  localStorage.setItem("todos", JSON.stringify(arr));
}

addTodo.addEventListener("click", addTodoFnc);

const local = localStorage.getItem("todos");
const localParse = JSON.parse(local);
// const mapping = localParse.map(e);
console.log(localParse);
