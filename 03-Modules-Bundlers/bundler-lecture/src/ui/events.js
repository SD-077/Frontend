import { storeTodos, retrieveTodos } from "../storage/todosStorage.js";
import { addTodo } from "./todosElements.js";

export const submitEvent = (event) => {
  event.preventDefault();
  const todoList = document.querySelector('#todo-list');
  
  const todoInput = document.querySelector('#todo-input').value.trim();
  if (!todoInput) alert('No input!');

  const newTodoItem = {
    id: `${new Date()}-${todoInput}`,
    title: todoInput,
    completed: false,
  };

  let todos = retrieveTodos() || [];
  todos.push(newTodoItem);
  storeTodos(todos);
  
  const newTodo = addTodo(newTodoItem);
  todoList.appendChild(newTodo);

  event.target.reset();
}