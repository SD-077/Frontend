function getDiscountedPrice(price: number, discount: number) {
  return price + discount;
}

const priceFromInput = "100";
const finalPrice = getDiscountedPrice(priceFromInput, 10);
console.log(finalPrice);

let username = "Bob";
let age: number = 10;
let isLoggedIn: boolean = true;

// username = 10;

// age = "10";

function add(a: number, b: number): number {
  return a + b;
}

// functions that don't return anything
function logMessage(message: string): void {
  console.log(message);
}

// ================= Arrow Functions =================
const multiply = (a: number, b: number): number => {
  return a * b;
};

// ================= Arrays and Tuples =================
// -- arrays --
let scores: number[] = [90, 231, 784, "21"];
let names: string[] = ["Bob", "Carl"];

// -- tuples --
let coordinate: [number, number] = [-51.3, 10.9];
let someValues: [boolean, number, string, boolean] = [true, 10, "hello", false];

// ================= Objects =================
let user: { name: string; age?: number } = {
  name: "Bob",
  age: 30,
};

// user.email = "Bob@bob.com"
