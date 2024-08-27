let {PI} = Math;

console.log(PI); // destructuring {}

let {pi} = Math;

console.log(pi); // does not work because pi does not exist on Math

console.log("Destructured variable comparison to original", PI === Math.PI);
PI = 1;
console.log("Destructured variable comparison after new assignament", PI === Math.PI);