function getDiscountedPrice(price: number, discount: number) {
  return price + discount;
}

const priceFromInput = "100";
const finalPrice = getDiscountedPrice(priceFromInput, 10);
// console.log(finalPrice);

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
// let scores: number[] = [90, 231, 784, "21"];
let names: string[] = ["Bob", "Carl"];

// -- tuples --
let coordinate: [number, number] = [-51.3, 10.9];
let someValues: [boolean, number, string, boolean] = [true, 10, "hello", false];

// ================= Objects =================
// let user: { name: string; age?: number } = {
//   name: "Bob",
//   age: 30,
// };
// user.email = "Bob@bob.com"

// ================= Type Aliases =================
// PascalCase
// type User = {
//   name: string;
//   age?: number;
// };

// let user: User = {
//   name: "Bob",
//   age: 20,
// };

// let user2: User = {
//   name: "Bernd",
//   age: 20,
// };

// ================= Interfaces =================
// interface User {
//   name: string;
//   age: number;
// }

// let user: User = {
//   name: "Bob",
//   age: 20,
// };

// interface Person {
//   name: string;
//   age: number;
// }

// interface Employee extends Person {
//   jobTitle?: string;
// }

// let worker: Employee = {
//   name: "Bob",
//   age: 20,
// };

// ================= Optional or default parameters =================
// optional value
// function greet(name: string, title?: string) {
//   if (title) return `Hello, ${title} ${name}`;

//   return `Hello, ${name}`;
// }

// console.log(greet("Bob"));
// console.log(greet("Bob", "Mr."));

// default value
// function greet(name: string, title = "friend") {
//   return `Hello, ${title} ${name}`;
// }

// console.log(greet("Bob"));
// console.log(greet("Bob", "Mr."));

// ================= Function return type =================
// function calculateTotal(price: number, qty: number): number {
//   return price * qty;
// }

// ================= Union Types & Literal Types =================
// Union Type
// let id: string | number;
// id = "abc";
// id = 50;
// // id = true;

// // Literal Type
// type Status = "active" | "inactive" | "pending";

// let userStatus: Status = "active";

// ================= Type Narrowing =================
// function printId(id: string | number) {
//   if (typeof id === "string") {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id.toFixed(2));
//   }
// }

// function greet(name: string, title?: string) {
//   // string | undefined
//   if (title) return `Hello, ${title} ${name}`;

//   return `Hello, ${name}`;
// }

// ================= null, undefined and unknown =================
// undefined: value hasn't been assigned just yet.
// null: a deliberate, intentional "nothing". YOU decided that there will be no value here
// unknown:

// async function getUser() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   const data: unknown = await res.json();

//   if (typeof data === "object" && data !== null && "name" in data) {
//     console.log("got a user object");
//   }

//   return data;
// }

// ================= Enums =================
// enum Role {
//   Admin = "ADMIN",
//   User = "USER",
//   Guest = "GUEST",
// }

// let myRole: Role = Role.Admin;
// console.log(myRole);

// ================= Generics =================

// function firstElement(arr: number[]): number {
//   return arr[0];
// }

// function firstElementStr(arr: string[]): string {
//   return arr[0];
// }

// console.log(firstElement(["10", 32, 8, 37]));

// <T> -> type parameter
// function firstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// const a = firstElement<number>([10, 20, 40]);

// const a = firstElement([10, 20, 3429]);
// const b = firstElement(["10", "20", "3429"]);
// const c = firstElement([true, false, false]);

// console.log(a, b, c);

// function makePair<T, U>(first: T, second: U): [T, U] {
//   return [first, second];
// }

// // constraints
// function logLength<T extends { length: number }>(value: T) {
//   console.log(value.length);
// }

// logLength([1, 2, 3]);
// logLength("hello");
// logLength(102934);
// logLength(true);

// type Box<T> = {
//   value: T;
// };

// const numberBox: Box<number> = { value: 89 };
// const stringBox: Box<string> = { value: "Hello" };

// type User = {
//   name: string;
//   age: number;
// };

// interface APIResponse<T> {
//   status: number;
//   message: string;
//   data: T;
// }

// // response with user data
// const userResponse: APIResponse<User> = {
//   status: 200,
//   message: "OK",
//   data: {
//     name: "Bob",
//     age: 20,
//   },
// };

// const tagsResponse: APIResponse<string[]> = {
//   status: 200,
//   message: "OK",
//   data: ["react", "ts"],
// };

// // let scores: number[] = [1 , 10]

// let scores: Array<number> = [1, 10];

// ================= Built-in utility types =================
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// --- Pick: keep only some properties ---
// Pick<T, K>

// type UserPreview = Pick<User, "id" | "name">;
// const preview: UserPreview = { id: 1, name: "Bob" };

// --- Omit: keep everything except some properties ---
// Omit<T, K>

// type NewUser = Omit<User, "id">;

// const newUser: NewUser = {
//   name: "Bob",
//   email: "bob@mail.com",
//   age: 20,
// };

// --- Record: build an object type from keys and values ---
// Record<K, V>

// type UserRoles = Record<string, string>;

// const roles: UserRoles = {
//   bob: "admin",
//   bobette: "editor"
// }

type Status = "active" | "inactive" | "pending";

type StatusLabels = Record<Status, string>;

const labels: StatusLabels = {
  active: "Currently active",
  inactive: "No longer active",
  pending: "Awaiting approval",
};
