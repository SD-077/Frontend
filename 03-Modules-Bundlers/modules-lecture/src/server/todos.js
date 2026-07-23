export async function getAllTodos() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error: ', err);
  }
}