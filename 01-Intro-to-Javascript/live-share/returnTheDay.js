// Declaring weekDay function
// Create a switch/conditional statment
// Create an array of strings with the days

function weekday(number){
    switch (number) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "WRONG!";
    }
}

console.log(weekday(3));

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function dayOfTheWeek(number) {
    const weekDay = weekDays[number - 1];
    if(!weekDay) return "WRONG!!!"
    return weekDay;
}

console.log(dayOfTheWeek(2))
console.log(dayOfTheWeek(8))