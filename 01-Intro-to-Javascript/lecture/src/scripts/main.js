function greet(name) {
  return `Hello, ${name}!`;
}

function goodMorning(name) {
  return `Good Morning, ${name}`
}
// High order functions
function greetUser(name, callback) {
  return callback(name); // callback function
}

console.log(greetUser("Harry", greet))
console.log(greetUser("Harry", goodMorning))

const numbers = [1, 2, 3, 20, 5, 15];

function logItem(item) {
  console.log(item)
}
function stringifyItems(item) {
  if(typeof item !== "string") {
    console.log(item.toString())
  }
}
function increaseByOne(item) {
  return item + 1
}
function mapAllItems(array, callback) {
  for(const item of array) {
    const newValue = callback(item);
    
  }
}
// mapAllItems(numbers, logItem);
// mapAllItems(numbers, stringifyItems)

const students = ["Harry", "Tom", "Jane"]

let studentString = "";
const newArray = [];

// forEach - return undefined
students.forEach((student) => studentString += `${student}, `);
const forEachVariable = students.forEach((student) => newArray.push(student));
console.log(forEachVariable)
console.log(studentString)
console.log(newArray)

// map - returns a new array

const increase1 = numbers.map((number) => number + 1);
console.log(increase1);
const greetStudents = students.map((student) => `Hello, ${student}`);
console.log(greetStudents)

// filter - return a new array
const numbersBiggerThan10 = numbers.filter((number) => number > 10)
console.log(numbersBiggerThan10)

// find - return one item of the array
const numberBiggerThan5 = numbers.find((number) => number > 5);
console.log(numberBiggerThan5)

// reduce - 
const totalSumOfNumbers = numbers.reduce((total, number) => {
  return total + number
}, 0)
console.log(totalSumOfNumbers)

const studentsString = students.reduce((accumulator, currentStudent) => {
  let currentIndex = students.indexOf(currentStudent);
  if(currentIndex === students.length - 1) {
    return (accumulator += `${currentStudent}`);
  } else {
    return (accumulator += `${currentStudent}, `);
  }
}, "");
console.log(studentsString);

// some - boolean
const hasItemsBiggerThan10 = numbers.some((number) => number > 19);
console.log(hasItemsBiggerThan10)

// every - boolean
const allItemsBiggerThan10 = numbers.every((number) => number > 10);
console.log(allItemsBiggerThan10);
console.log(numbers)

// sort
// numbers.sort()
numbers.sort((a, b) => b - a);
console.log(numbers)

students.sort()
console.log(students);