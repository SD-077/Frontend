const cancelButton = document.getElementById('cancel');

const h2 = document.createElement('h2');
h2.textContent = 'Hello class';
// setTimeout() -> executes a function after a specified delay
const myTimeout = setTimeout(() => {
  document.body.insertBefore(h2, cancelButton);
  const myTimeout2 = setTimeout(() => {
    h2.remove();
  }, 5000);
}, 2000);

cancelButton.addEventListener('click', () => clearTimeout(myTimeout));

// setInterval() -> executes a function every amount of time
let counter = 0;
// const myInterval = setInterval(() => {
//   console.log(counter);
//   counter++;
//   if (counter === 10) {
//     clearInterval(myInterval);
//   }
// }, 2000);
