// data types
    // Simple data types or Primitive data types
    // strings
    console.log('Hello World!');
    console.error('Hello "Class"');
    console.warn("I'm a warning");
    console.warn(''); // empty string

    // numbers
    console.log(9);
    console.log(9.3);
    // boolean
    console.log(true);
    console.log(false);
    // null
    // undefine
    // symbols

    // truthy values - true, any string with content, any number but 0
    // falsy values - false, undefine, null, 0, empty string

    // Complex Data types
        // Arrays
        // [1, 2, 3]
        // ["Maria", "Ada", "Jorge"]
        // ["Maria", 3, true]
        // [[1,2,3], "Maria"]
        
        // Objects literals
        const person = {
            firstName: "Jorge",
            lastName: "Garcia",
            age: 44,
            hobbies: ["Singing", "Reading"],
            address: {
                street : "Gartenstr.",
                number: "16b",
                postalCode:13444,
                city: "Berlin",
                country: "Germany"
            }
        }
        
        // Functions
        function sum() {
            console.log(3 + 2);
            return 3 + 2;
        }
        let result = sum();
        // console.log(result)
