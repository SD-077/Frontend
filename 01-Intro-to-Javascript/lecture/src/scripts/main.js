// Arrays

const numbers = [0, 1, 2, 3, 4, 5, 6]; 
const strings = ['one', 'two', 'three', 'four', 'five'];
// numbers = 33

// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[6]);
// console.log(numbers.length);
// console.log(numbers[numbers.length - 1])
// console.log(numbers[numbers.length / 2])

// push and pop - work at the last index
// console.log(strings)

// const removedItem = strings.pop()
// console.log(strings)
// console.log(removedItem)

// strings.push("eight");
// console.log(strings)

// // shift and unshift - they work always at index 0
// strings.shift()
// console.log(strings)

// strings.unshift("9")
// console.log(strings)

// reverse() and toReversed()
// numbers.reverse()
// console.log(numbers)

// const reversedNumbers = numbers.toReversed()
// console.log(numbers)
// console.log(reversedNumbers)

// splice and toSpliced
// numbers.splice(4, 0, "3", "2", "4")
// numbers.splice(4)
// numbers.splice(4, 0, "4")
// numbers.splice(4, 2, "4")
// console.log(numbers)

// console.log(numbers);
// const splicedArray = numbers.toSpliced(4, 2, '4');
// console.log(numbers)
// console.log(splicedArray)

// const slicedNumbers = numbers.slice(3)
const slicedNumbers = numbers.slice(4)
// console.log(slicedNumbers);
const locations = [ "Berlin", "Tokyo", "London", "Madrid"];
locations[2] = "Brasil";
// console.log(locations)
// const topLocations = locations.slice(0, 3);
const topLocations = locations.slice(-3);
// console.log(topLocations)

// console.log(locations.join(" - "))

const student = {
  name: 'Ana',
  age: 25,
  city: 'Barcelona',
};

// console.log(student)
// console.log(student.name)
// console.log(student.city)
// console.log(student["name"])

student.age = 26;
// console.log(student.age)

student.email = "ana@gmail.com";
// console.log(student)


const students = [
  {
    name: 'Ana',
    age: 25,
    hobbies: ["singing", "cooking"],
    address: {
      street: "Gartenstr.",
      number: 22,
      postalCode: 24422,
      city: "Barcelona"
    }
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
  }
];

console.log(students)
console.log(students[0])
console.log(students[0].name)
console.log(students[0].hobbies)
console.log(students[0].hobbies[1])
console.log(students[0].address.city)

// const arrayOfArrays = [[1,2],[2,3]]
// console.log(arrayOfArrays)
// console.log(arrayOfArrays[0])
// console.log(arrayOfArrays[0][1])