console.log("1 < 2","is", 1 < 2);

console.log("1 > 2","is", 1 > 2);

console.log("1 == 2", "is", 1 == 2);

console.log("1 != 2", "is", 1 != 2);

var booleanValue1 = true;

var booleanValue2 = false;

console.log(booleanValue1 && booleanValue2);

//gotchas

var score = 100; //declare and assign a value to a variable

console.log("The value of score is",score);

console.log("100 == score","is", 100 == score); 

console.log("'100' == score","is", '100' == score); 

console.log("100 == '100'","is", 100 == '100'); // == checks only for value

console.log("100 === score","is", 100 === '100'); // === checks for type and value
