const storeItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
};

const retrieveItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const form = document.querySelector('form');
const todoList = document.querySelector('#todo-list');
let todos = retrieveItem('todos') || [];

todos.forEach((todo) => {
  const newTodo = addTodo(todo);
  todoList.appendChild(newTodo);
});
// function to create a new todo item
// it creates a new li element with the todo text, an edit button, and a
// delete button
// it also adds event listeners to the edit and delete buttons
// it returns the new li element
// it does not append the new li element to the todo list
// it requires an item parameter which is the text of the todo item
function addTodo(item) {
  const li = document.createElement('li');
  li.id = item.id;
  item.complete ? (li.style.textDecoration = 'line-through') : (li.style.textDecoration = 'none');

  const span = document.createElement('span');
  span.textContent = item.text;

  const editBtn = document.createElement('button');
  editBtn.textContent = 'edit';

  editBtn.addEventListener('click', () => {
    todos = todos.map((todo) => {
      if (todo.id === item.id) {
        todo.complete ? (todo.complete = false) : (todo.complete = true);
        return todo;
      }

      return todo;
    });
    storeItem('todos', todos);
    const editedTodo = todos.find((todo) => todo.id === item.id);
    console.log(editedTodo.complete);

    editedTodo.complete ? (li.style.textDecoration = 'line-through') : (li.style.textDecoration = 'none');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'delete';

  deleteBtn.addEventListener('click', () => {
    li.remove();
    todos = todos.filter((todo) => todo.id !== item.id);
    storeItem('todos', todos);
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  // todoList.appendChild(li)
  return li;
}

// event listener for the form submit event
// prevents the default form submission behavior
// gets the value of the input field and trims it
// if the input is empty, it shows an alert
// otherwise, it creates a new todo item and appends it to the todo list
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoInput = document.querySelector('#todo-input').value.trim();
  // console.log(event.target[0].value.trim())
  console.log(todoInput);
  if (!todoInput) alert('No input!');
  const newTodoItem = {
    id: `${new Date()}-${todoInput}`,
    text: todoInput,
    complete: false,
  };

  todos.push(newTodoItem);
  storeItem('todos', todos);
  const newTodo = addTodo(newTodoItem);
  console.log(newTodo);
  todoList.appendChild(newTodo);

  form.reset();
});

// fetch with then and catch blocks to retrieve data and display it in
// the DOM
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((res) => res.json())
// .then((data) => {
//   // const todos = data.slice(0, 10);
//   console.log(data.slice(0, 10));
//   data.slice(0, 10).forEach((item) => {
//     const newTodo = addTodo(item.title);
//     todoList.appendChild(newTodo)
//   })
// })
// .catch((err) => console.error(err))

// this function retrieves the todo list of the jsonplaceholder API and
// displays it in the todo list
// async function getAllTodos(url) {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     console.error('Error: ', err);
//   }
// }

document.addEventListener('DOMContentLoaded', async () => {
  // const todos = await getAllTodos('https://jsonplaceholder.typicode.com/todos');
  // console.log(todos);
  // todos.slice(0, 10).forEach((item) => {
  //   const newTodo = addTodo(item.title);
  //   todoList.appendChild(newTodo);
  // });
});
