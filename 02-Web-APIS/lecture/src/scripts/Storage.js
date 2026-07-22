const storeItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
};

const retrieveItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

let todos = retrieveItem('todos') || [];