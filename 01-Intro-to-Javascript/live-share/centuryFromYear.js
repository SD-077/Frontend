// Declaring the function centuryFromYear
// We need to pass the year as a parameter
// calculate the century by dividing the year by 100

function centuryFromYear(year) {
    return Math.ceil(year / 100);
}

console.log(centuryFromYear(1705))
console.log(centuryFromYear(1700))