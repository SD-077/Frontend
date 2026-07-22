const form = document.querySelector('form');
const todoList = document.querySelector('#todo-list');


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
}

todos.forEach((todo) => {
  const newTodo = addTodo(todo);
  todoList.appendChild(newTodo);
});