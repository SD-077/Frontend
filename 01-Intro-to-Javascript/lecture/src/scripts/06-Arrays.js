const arrayNumbers = [1, 3, 4, 6, 2, 10]; // We almost always use const to declare a variable for an array, as we don't want to make the array be updated to somehting else accdidentally.
console.log(arrayNumbers) // logs the whole array into the console

// square notation - uses the square brakets to use an specific element inside an array or object
// dot notation - uses the dot between an object an a property/method assigned to it

console.log(arrayNumbers[0]) // logs the item with index 0 in the array
console.log(arrayNumbers[2]) // logs the item with index 2

console.log('items in array: ', arrayNumbers.length); // logs the number of items in the array
