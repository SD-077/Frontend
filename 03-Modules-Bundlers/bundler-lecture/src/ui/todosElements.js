import { storeTodos, retrieveTodos } from "../storage/todosStorage.js";

export function addTodo(item) {
  let todos = retrieveTodos() || [];
  const li = document.createElement('li');
  li.id = item.id;
  item.completed ? (li.style.textDecoration = 'line-through') : (li.style.textDecoration = 'none');

  const span = document.createElement('span');
  span.textContent = item.title;

  const editBtn = document.createElement('button');
  editBtn.textContent = 'edit';

  editBtn.addEventListener('click', () => {
    todos = todos.map((todo) => {
      if (todo.id === item.id) {
        todo.completed ? (todo.completed = false) : (todo.completed = true);
        return todo;
      }

      return todo;
    });
    storeTodos(todos);
    const editedTodo = todos.find((todo) => todo.id === item.id);
    console.log(editedTodo.completed);

    editedTodo.completed ? (li.style.textDecoration = 'line-through') : (li.style.textDecoration = 'none');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'delete';

  deleteBtn.addEventListener('click', () => {
    li.remove();
    todos = todos.filter((todo) => todo.id !== item.id);
    storeTodos(todos);
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  return li;
};

export const todosContainer = (todos, todoList) => {
  todos.forEach((todo) => {
  const newTodo = addTodo(todo);
  todoList.appendChild(newTodo);
});
}
