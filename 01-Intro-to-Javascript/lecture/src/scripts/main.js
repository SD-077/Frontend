
const h1 = document.querySelector("h1")
const main = document.querySelector("main");
const form = document.querySelector("form");
const todoList = document.querySelector("#todo-list");


function addTodo(item) {
  const li = document.createElement("li");
  
  const span = document.createElement("span");
  span.textContent = item;

  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";

  editBtn.addEventListener("click", () => {
    li.style.textDecoration = "line-through"
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = 'delete';
  
  deleteBtn.addEventListener("click", () => {
    li.remove()
  });

  li.appendChild(span);
  li.appendChild(editBtn)
  li.appendChild(deleteBtn);
  // todoList.appendChild(li)
  return li;
}


form.addEventListener("submit", (event) => {
  event.preventDefault()
  const todoInput = document.querySelector('#todo-input').value.trim();
  // console.log(event.target[0].value.trim())
  console.log(todoInput)
  if(!todoInput) alert("No input!")
  const newTodo = addTodo(todoInput);
  todoList.appendChild(newTodo);
  form.reset()
})

addTodo("Cooking")



