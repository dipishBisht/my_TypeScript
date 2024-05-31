// const age: number = 20;   //? To declare a variable in TS.
// let age2 = 20;           //? Here we have not describe that its type is number, the typescript compiler detects that it is number
// if (age) age++;
// console.log(age);

// const myName: string = "Dipish";   //? String
// let myName2 = "Dipish";          //? Type

// const isBool: boolean = true;      //? Boolean
// let isBool2 = true;              //? Type

// let level; //? Type Any

// level = 20;
// level = "TypeScript";

// function print(data: number) {
//   console.log(data);
// }
// print(5)

//* Literals Type

type num = 50 | 100;

let a: num = 50;

//* Nullable Type

// function displayName(name: string): void {
//   console.log(name);
// }

// displayName(null);

//* Optional Chaining

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if (customer !== null && customer !== undefined) {
//   console.log(customer.birthday);
// }
console.log(customer?.birthday);
