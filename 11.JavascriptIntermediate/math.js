//javascript build-in object Math

var pi = Math.PI;
var eulers = Math.E;
var natLog = Math.LN2;

console.log(pi);
console.log(eulers);
console.log(natLog);

var floatNumber = Math.PI;
console.log("PI rouded up is", Math.ceil(floatNumber));
console.log("PI trunked is ", Math.trunc(floatNumber));

console.log("2 to the power of 3 is", Math.pow(2,3));
console.log("Square root of 16 is", Math.sqrt(16));

console.log("The minimum between 9,8,7 is", Math.min(9,8,7));


var randomNumeber1 = Math.ceil(Math.random()*100);
var randomNumeber2 = Math.ceil(Math.random()*100);
var randomNumeber3 = Math.ceil(Math.random()*100);

console.log(
    "The minimum between",
    randomNumeber1,
    randomNumeber2,
    randomNumeber3,
    "is",
    Math.min(randomNumeber1, randomNumeber2, randomNumeber3)
 );
