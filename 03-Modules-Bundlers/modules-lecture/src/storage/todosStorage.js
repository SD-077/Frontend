export const storeTodos = (value) => {
  localStorage.setItem("todos", JSON.stringify(value));
  return value;
};

export const retrieveTodos = () => {
  return JSON.parse(localStorage.getItem('todos'));
};


export const updateTodos = () => {
  
}