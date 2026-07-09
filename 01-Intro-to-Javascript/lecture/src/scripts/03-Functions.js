// Functions
// Parameters - placeholders used when function is declared
function sum(num1, num2) {
  console.log('value of num1:', num1);
  console.log('value of num2:', num2);
  console.log('Result: ', num1 + num2);
  return num1 + num2;
}

// Argument - value that we give to a paramerter when the function is called
// let result = sum(2, 2);
// console.log(result);
sum(2);
sum(5, 3);
sum(4, 4);

// Types of functions
  // ES5 function
  function hello(name = 'there') {
    return `Hello ${name}`;
  }
  console.log(hello());
  console.log(hello('Ana'));

  function sum(num1, num2) {
    if (!num1 || !num2) {
      return `Please enter numbers!`;
    }
    return num1 + num2;
  }
  // Function expression
  const greet = function helloWorld() {};
  
  // Arrow function or ES6 Function
  const greeting = (name) => {
    return `Good morning, ${name}`;
  };
  console.log(greeting('Paul'));
