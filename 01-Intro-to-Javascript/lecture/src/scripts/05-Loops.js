const arrayNumbers = [1, 3, 4, 6, 2, 10];

// Loops
// for loops
for (let i = 0; i < 6; i++) {
  // console.log(i)
}
for (let i = 0; i < arrayNumbers.length; i++) {
  //   console.log(arrayNumbers[i]);
}

// while loop
// let question = "How are you today?";
// let answer = "I'm ok!"

// while(answer != "I'm ok") {
//     console.log(question)
// }
let count = 0;
// while(count < 6) {
//     count++
//     // console.log(count)
// }

while (count < arrayNumbers.length) {
  console.log(arrayNumbers[count]);
  count++;
}

// do while loop
do {
  console.log('Condition already meet');
} while (count < arrayNumbers.length);
