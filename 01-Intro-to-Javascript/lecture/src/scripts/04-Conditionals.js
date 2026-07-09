// Conditionals
    // console.log(3 === "3") // compares value and data type
    // console.log(3 == "3") // compares only the value
    // console.log(3 !== "3") // compares value and data type
    // console.log(3 != "3") // compares the value
    // console.log(3 > 5)
    // console.log(3 >= 5)
    // console.log(3 <= 5)
    // && - and
    // || - or
    // ! - not

    // If / else if / else Conditionals
    const firstName = 'Miriam';
    let age = 44;
    if (age < 0) {
    console.log('Incorrect age');
    } else if (age < 18) {
    console.log(`${firstName} is underage`);
    } else {
    console.log(`${firstName} is an adult.`);
    }

    // Switch statement
    let temperature = 0;
    let message;

    switch (temperature) {
    case 0:
        message = `Is freezing!`;
        break; // we use the break at the end of the case to avoid executing the next case
    case 15:
        message = `it's getting warmer, wear a light coat.`;
        break;
    case 25:
        message = `It's warm, only wear a t-shirt.`;
        break;
    default:
        message = `We don't know this temperature.`;
        break;
    }
    console.log(message);

    // switch statement inside a function
    function temperatureAdvise(temperature) {
    let message;
    switch (temperature) {
        case 0:
        message = `Is freezing!`;
        break;
        // return `Is freezing!`; // return can only be used inside a function, it will return the value and exit the function
        case 15:
        message = `it's getting warmer, wear a light coat.`;
        break;
        case 25:
        message = `It's warm, only wear a t-shirt.`;
        break;
        default:
        message = `We don't know this temperature.`;
        break;
    }
    return message;
    }

    const advice = temperatureAdvise(22);
    console.log(advice);

    console.log(temperatureAdvise(25));

    console.log(temperatureAdvise(0));  
