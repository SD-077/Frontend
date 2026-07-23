import { retrieveTodos, storeTodos } from "./storage/todosStorage.js";
import { addTodo, todosContainer } from "./ui/todosElements.js";
import { getAllTodos } from "./server/todos.js";
import { submitEvent } from "./ui/events.js";

const form = document.querySelector('form');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', submitEvent);

document.addEventListener('DOMContentLoaded', async () => {
  const todos = await getAllTodos();
  console.log(todos);
  // todos.slice(0, 10).forEach((item) => {
  //   const newTodo = addTodo(item.title);
  //   todoList.appendChild(newTodo);
  // });
  // todosContainer(todos, todoList)
});