// Variables
    // const - variables that cannot update its value, they remain constant throughout the entire program
    const firstName = 'Maria';
    // console.log(firsName); //typo that triggers a ReferenceError

    // let - variables that can update their value, they can be iniciated without a value
    let age;
    console.log('age:', age); // outputs undefined as the age has not been iniciated as a value
    age = 23;
    console.log('updated age:', age);
    
    //var variables - forget they exist, they are not used anymore, they have been replaced by let and const
     