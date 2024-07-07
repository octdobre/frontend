var letters = "abc";

for( var i = 0; i < letters.length; i++){
    console.log("Position", i, "is letter", letters[i]);
}


var veggies = ["onion", "parsley", "carrot"];

console.log(veggies);

for( var i = 0; i < veggies.length; i++){
    console.log("Position", i, "is vegetable", veggies[i]);
}

var greet = "Hello";
var person = "Joe";

console.log(greet + person);
console.log(greet.concat(person));

console.log(greet.charAt(0));
console.log("He".concat("llo").concat("World"));
console.log(greet.split('l'));