const arrayNumbers = [1, 3, 4, 6, 2, 10]; // We almost always use const to declare a variable for an array, as we don't want to make the array be updated to somehting else accdidentally.
console.log(arrayNumbers) // logs the whole array into the console

// square notation - uses the square brakets to use an specific element inside an array or object
// dot notation - uses the dot between an object an a property/method assigned to it

console.log(arrayNumbers[0]) // logs the item with index 0 in the array
console.log(arrayNumbers[2]) // logs the item with index 2

console.log('items in array: ', arrayNumbers.length); // logs the number of items in the array


// Array - methods

const numbers = [0, 1, 2, 3, 4, 5, 6]; 
const numbersToReverse = [0, 1, 2, 3, 4, 5, 6];
const numbersToSplice = [0, 1, 2, 3, 4, 5, 6];
const numbersToSlice = [0, 1, 2, 3, 4, 5, 6];
const strings = ['one', 'two', 'three', 'four', 'five'];
// numbers = 33 // we create the arrays with const so that we don't accidentally 
// reassign the variable to something else, but we can still update the values 
// inside the array.

console.log(numbers); // logs the whole array into the console

// select items in the array using the index of the item inside square brackets
console.log(numbers[0]); // logs the item with index 0 in the array
console.log(numbers[3]); // logs the item with index 3 in the array
console.log(numbers[6]); // if the index is out of range it will return undefined
console.log(numbers.length); // the length property of an array returns the number 
// of items in the array
console.log(numbers[numbers.length - 1]) // using the length property to get the last item in the array 

console.log(numbers[numbers.length / 2]) // using the length property to get the middle item in the array

console.log(numbers[Math.floor(numbers.length / 2)]); // to be more precise while getting the item in the 
// middle of the array we can use Math.floor() to round down the result of the division

// push and pop - work at the last index
console.log(strings)

// pop() removes the last item in the array and returns it
const removedItem = strings.pop() // you can store the removed item in a variable to use it later
console.log(strings) // from the console we can see that the last item in the array has been removed
console.log(removedItem)

// push() adds a new item to the end of the array
strings.push("eight");
console.log(strings)

// shift and unshift - they work always at index 0
// shift() removes the first item in the array and returns it
const shiftedItem = strings.shift() // you can store the removed item in a 
// variable to use it later
console.log(strings)
console.log(shiftedItem)

// unshift() adds a new item to the beginning of the array
strings.unshift("9")
console.log(strings)

// reverse() and toReversed()
// reverse() reverses the order of the items in the array and returns the reversed 
// array. It MUTATES the ORIGINAL array.
numbersToReverse.reverse()
console.log(numbers)

// toReversed() reverses the order of the items in the array and returns a NEW
// reversed array. It DOES NOT MUTATE the ORIGINAL array.
const reversedNumbers = numbers.toReversed()
console.log(numbers)
console.log(reversedNumbers)

// splice and toSpliced
// splice() removes or replaces existing items in an array and/or adds new items in
// the array. It MUTATES the ORIGINAL array.
numbersToSplice.splice(4, 0, "3", "2", "4")
numbersToSplice.splice(4)
numbersToSplice.splice(4, 0, "4")
numbersToSplice.splice(4, 2, "4")
console.log(numbersToSplice)

// toSpliced() removes or replaces existing items in an array and/or adds new items in
// the array. It DOES NOT MUTATE the ORIGINAL array.
const splicedArray = numbers.toSpliced(4, 2, '4');
console.log(numbers)
console.log(splicedArray)

// Slice() cuts a section of an array and returns a new array. 
// It DOES NOT MUTATE the ORIGINAL array.
const slicedNumbers = numbers.slice(4)
// console.log(slicedNumbers);
const locations = [ "Berlin", "Tokyo", "London", "Madrid"];
locations[2] = "Brasil";
// console.log(locations)
// const topLocations = locations.slice(0, 3);
const topLocations = locations.slice(-3);
// console.log(topLocations)

// join() joins all the items in an array into a string and returns it.
console.log(locations.join(" - "))