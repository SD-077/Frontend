const student = {
  name: 'Ana',
  age: 25,
  city: 'Barcelona',
};

console.log(student) // loging the student object into the console

// use dot notation or square notation to get the value of an object's property
console.log(student.name) // logging the name value of the student object in the console
console.log(student.city) // logging the city value of the student object in the console
console.log(student["name"]) // logging the name value of the student object in the console using square notation

// to update a property inside an object select the property with dot or square notation 
// and assign a new value to it
student.age = 26;
student["name"] = 'Anne';
// console.log(student.age)

// to create a new property inside an object use dot or square notation and assign 
// a name for the property after the dot or inside the square brackets and assign a 
// value to it
student.email = 'ana@gmail.com';
student["phone"] = '123456789';
console.log(student)

const students = [
  {
    name: 'Ana',
    age: 25,
    hobbies: ['singing', 'cooking'],
    address: {
      street: 'Gartenstr.',
      number: 22,
      postalCode: 24422,
      city: 'Barcelona',
    },
  },
  {
    name: 'Paul',
    age: 30,
    city: 'Madrid',
  },
  {
    name: 'John',
    age: 35,
    city: 'Valencia',
  },
];

console.log(students);
console.log(students[0]);
console.log(students[0].name);
console.log(students[0].hobbies);
console.log(students[0].hobbies[1]);
console.log(students[0].address.city);

