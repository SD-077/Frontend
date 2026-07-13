// Declaring a function
function greet() {
    console.log("Hello, world!");
}

// calling the function
greet();

// function expression
const greetExpression = function (name) {
  console.log(`Hello ${name} from function expression!`);
};

greetExpression("John");

//arrow function
const greetArrow = () => {
  console.log('Hello from arrow function!');
};

greetArrow();

// Loops
const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'monkey'];

let totalAnimals = 0;

for (let i = 0; i < animals.length; i++) {
    totalAnimals++
    // totalAnimals = i + 1
    // console.log(totalAnimals, i)
    // console.log(animals[i])
}

// console.log(totalAnimals)

// for... of
for (const item of animals) {
    if (item.endsWith("r")) {
        console.log("Name ends with r: "+ item);
    }
}
