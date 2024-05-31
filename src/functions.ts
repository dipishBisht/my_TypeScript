//* Functions

// function calculate(value: number): void {   //? Not a Return type function
// }

// function calculate(value: number): number {  //? It is a return type function and its return type data will be number
//   if (value) {
//     return value;
//   } else return 0;
// }

//* Union

// function inputWeight(weight: number | string) {

//     //! this method is known as Narrowing
//   if (typeof weight === "number") {
//     return `Your Weight is ${weight}`;
//   } else {
//     return `Your Weight is ${weight}`;
//   }
// }

//* Intersections

type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UI = Draggable & Resizeable;

let textBox: UI = {
  drag: () => {},
  resize: () => {},
};
